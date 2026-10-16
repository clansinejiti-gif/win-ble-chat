import noble from "@abandonware/noble";
import bleno from "@stoprocent/bleno";
// import { prisma } from "../config/prisma";
import { CacheService } from "../services/cache.service";
import crypto from "crypto";

const prisma : any = null

export interface BleChatMessage {
  id: string; // Will store as short hash or sequential tracker
  roomId: string;
  senderId: string;
  senderName: string;
  role: "student" | "supervisor";
  isAdmin: boolean;
  type: "text" | "code" | "task_link" | "announcement";
  content: string;
  timestamp?: number;
  signature: string;
}

class BleMeshServices {
  private prisma: typeof prisma;
  private cache: CacheService;
  // Use a short 16-bit UUID placeholder for mesh filtering to save packet space
  private readonly MESH_UUID_16 = "fe26"; 
  private readonly MANUFACTURER_ID = 0xfe26;
  private currentRoomId: string | null = null;
  private localSequenceCounter = 0;
  private isBroadcasting = false;

  constructor(prismaInstance: typeof prisma, cacheInstance: CacheService) {
    this.prisma = prismaInstance;
    this.cache = cacheInstance;
    this.initializeMeshStack();
  }

  public setRoomContext(roomId: string): void {
    this.currentRoomId = roomId;
    console.log(`[Mesh] Room Context Set: ${roomId}`);
  }

  private initializeMeshStack(): void {
    noble.on("stateChange", async (state: any) => {
      if (state === "poweredOn") {
        // Scan with duplicates true to act as a live continuous packet sniffer
        await noble.startScanningAsync([], true);
        console.log("[Mesh] Noble packet scanning active");
      }
    });

    noble.on("discover", async (peripheral: any) => {
      this.handleIncomingDiscovery(peripheral);
    });

    bleno.on("stateChange", (state: any) => {
      console.log(`[Mesh] Bleno state: ${state}`);
    });
  }

  private async handleIncomingDiscovery(peripheral: any): Promise<void> {
    const adv = peripheral.advertisement;
    // Read from scanResponse buffer if manufacturerData isn't in main advertisement packet
    const buffer: Buffer = adv?.manufacturerData || adv?.serviceData?.[0]?.data;
    if (!buffer || buffer.length < 12) return; 

    // Verify company/mesh identifier
    if (buffer.readUInt16BE(0) !== this.MANUFACTURER_ID) return;

    const sequenceId = buffer.readUInt16BE(2);
    const ttl = buffer.readUInt8(4);
    
    if (!this.currentRoomId) return;

    const cacheKey = `ble_mesh:${this.currentRoomId}:${sequenceId}`;
    if (await CacheService.get(cacheKey)) return; // Already processed/relayed this frame
    await CacheService.set(cacheKey, true, 600);

    const parsedMessage = this.deserializeBinaryPayload(buffer.subarray(5));
    if (!parsedMessage || parsedMessage.roomId !== this.currentRoomId.substring(0, 4)) return;

    console.log(`[Mesh] 📬 Received message from ${parsedMessage.senderName}: ${parsedMessage.content}`);

    // Commit to local DB asynchronously
    // await this.prisma.chatMessage.create({
    //   data: {
    //     id: crypto.randomUUID(),
    //     roomId: this.currentRoomId, 
    //     senderId: parsedMessage.senderId,
    //     senderName: parsedMessage.senderName,
    //     role: parsedMessage.role,
    //     isAdmin: parsedMessage.isAdmin,
    //     type: parsedMessage.type,
    //     content: parsedMessage.content,
    //     timestamp: new Date(),
    //   },
    // }).catch(err => console.error("[Mesh] DB Error:", err));

    // Relay packet forward to other nodes if TTL remains
    if (ttl > 1) {
      await this.queueMeshRelay(sequenceId, ttl - 1, buffer.subarray(5));
    }
  }

  public async transmitMessage(
    msgPayload: Omit<BleChatMessage, "id" | "timestamp" | "signature">,
  ): Promise<void> {
    this.localSequenceCounter = (this.localSequenceCounter + 1) % 65535;

    const compressedMessage: Partial<BleChatMessage> = {
      ...msgPayload,
      roomId: this.currentRoomId?.substring(0, 4) || "0000", // Chop room to 4-character ID to fit packet limits
    };

    const header = Buffer.alloc(5);
    header.writeUInt16BE(this.MANUFACTURER_ID, 0);
    header.writeUInt16BE(this.localSequenceCounter, 2);
    header.writeUInt8(4, 4); // Set TTL to 4 hops maximum

    const payload = this.serializeBinaryPayload(compressedMessage as BleChatMessage);
    
    if (payload.length > 26) {
      console.error(`[Mesh] Message content too long! String byte size must stay minimal.`);
      return;
    }

    const fullFrame = Buffer.concat([header, payload]);

    await CacheService.set(
      `ble_mesh:${this.currentRoomId}:${this.localSequenceCounter}`,
      true,
      600
    );

    this.broadcastFrame(fullFrame);
  }

  private async queueMeshRelay(seqId: number, nextTtl: number, payload: Buffer) {
    const relayHeader = Buffer.alloc(5);
    relayHeader.writeUInt16BE(this.MANUFACTURER_ID, 0);
    relayHeader.writeUInt16BE(seqId, 2);
    relayHeader.writeUInt8(nextTtl, 4);

    setTimeout(() => {
      this.broadcastFrame(Buffer.concat([relayHeader, payload]));
    }, Math.random() * 250); // Jitter delay to avoid signal collisions
  }

  private broadcastFrame(frameBuffer: Buffer): void {
    if (this.isBroadcasting) return;
    this.isBroadcasting = true;

    // Turn off scanner to free physical radio for Tx transmission on Linux
    noble.stopScanningAsync().then(() => {
      bleno.stopAdvertising(() => {
        
        // Construct compliant BLE EIR formatting structure
        // Length byte, Type byte, Values
        const advData = Buffer.concat([
          Buffer.from([0x02, 0x01, 0x06]), // 1. Flags packet
          Buffer.from([0x03, 0x03, 0x26, 0xfe]), // 2. 16-bit Service UUID advertisement
        ]);

        // Wrap our custom binary mesh payload inside the Scan Response field
        const scanData = Buffer.concat([
          Buffer.from([frameBuffer.length + 1, 0xff]), // Length & Manufacturer Data flag type
          frameBuffer
        ]);

        const blenoRaw = bleno as any;
        if (typeof blenoRaw.startAdvertisingWithEIRData === "function") {
          blenoRaw.startAdvertisingWithEIRData(advData, scanData, (err: any) => {
            if (err) console.error("[Mesh] Tx Burst failure:", err);

            // Keep broadcasting the packet for 400ms so neighbors intercept it
            setTimeout(() => {
              bleno.stopAdvertising(() => {
                this.isBroadcasting = false;
                // Instantly pivot back to sniffer mode
                noble.startScanningAsync([], true);
              });
            }, 400);
          });
        }
      });
    });
  }

  /**
   * BINARY COMPRESSION ENGINE
   * Packs strings and enums into individual byte offsets to squeeze inside 31 bytes
   */
  private serializeBinaryPayload(msg: BleChatMessage): Buffer {
    const nameBuf = Buffer.from(msg.senderName.substring(0, 5), "utf8"); // Max 5 chars name
    const contentBuf = Buffer.from(msg.content.substring(0, 15), "utf8"); // Max 15 chars msg text

    const metaByte = 
      ((msg.role === "supervisor" ? 1 : 0) << 7) |
      ((msg.isAdmin ? 1 : 0) << 6) |
      ((["text", "code", "task_link", "announcement"].indexOf(msg.type) & 0x03) << 4);

    const fixedHeader = Buffer.alloc(7);
    fixedHeader.write(msg.roomId.substring(0, 4), 0, 4, "utf8"); // 4 bytes room identifier
    fixedHeader.writeUInt8(parseInt(msg.senderId.substring(0, 2), 16) || 0, 4); // 1 byte short senderId
    fixedHeader.writeUInt8(metaByte, 5);
    fixedHeader.writeUInt8(nameBuf.length, 6);

    return Buffer.concat([fixedHeader, nameBuf, contentBuf]);
  }

  private deserializeBinaryPayload(buffer: Buffer): Partial<BleChatMessage> | null {
    try {
      if (buffer.length < 7) return null;
      const roomId = buffer.toString("utf8", 0, 4);
      const senderId = buffer.readUInt8(4).toString(16);
      const metaByte = buffer.readUInt8(5);
      const nameLen = buffer.readUInt8(6);

      const role = (metaByte & 0x80) ? "supervisor" : "student";
      const isAdmin = !!(metaByte & 0x40);
      const typeIndex = (metaByte & 0x30) >> 4;
      const types: BleChatMessage["type"][] = ["text", "code", "task_link", "announcement"];
      const type = types[typeIndex] || "text";

      const senderName = buffer.toString("utf8", 7, 7 + nameLen);
      const content = buffer.toString("utf8", 7 + nameLen);

      return { roomId, senderId, role, isAdmin, type, senderName, content };
    } catch {
      return null;
    }
  }
}

export const BleMeshService = new BleMeshServices(prisma, new CacheService());
