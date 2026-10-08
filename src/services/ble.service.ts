import crypto from "crypto";
import noble from "@stoprocent/noble";
import bleno from "@stoprocent/bleno";
import { CacheService } from "./cache.service";

export interface BleChatMessage {
  id: string;
  roomId: string;
  senderId: string;
  senderName: string;
  role: "student" | "supervisor";
  isAdmin: boolean;
  type: "text" | "code" | "task_link" | "announcement";
  content: string;
  timestamp: number;
  signature?: string;
}

export class BleMeshServices {
  private readonly SERVICE_UUID = "0000fe2600001000800000805f9b34fb";
  private readonly MANUFACTURER_ID = 0xfe26;
  private currentRoomId: string | null = null;
  private localSequenceCounter = 0;
  private isSwitching = false;

  constructor() {
    this.initializeMeshStack();
  }

  public setRoomContext(roomId: string): void {
    this.currentRoomId = roomId;
    console.log(`[BLE] Joined room: ${roomId}`);

    if (bleno.state === "poweredOn") {
      this.startAdvertising();
    }
  }

  private initializeMeshStack(): void {
    noble.on("stateChange", async (state: string) => {
      if (state === "poweredOn") {
        try {
          await noble.startScanningAsync([this.SERVICE_UUID], true);
          console.log("[BLE] Scanning started");
        } catch (err) {
          console.error("[BLE] Scanning error:", err);
        }
      } else {
        noble.stopScanning();
      }
    });

    noble.on("discover", (peripheral: any) => {
      this.handleIncomingDiscovery(peripheral);
    });

    bleno.on("stateChange", (state: string) => {
      if (state === "poweredOn" && this.currentRoomId) {
        this.startAdvertising();
      }
    });
  }

  private startAdvertising(): void {
    if (!this.currentRoomId) return;

    const name = `zigex-${this.currentRoomId.substring(0, 10)}`;
    bleno.startAdvertising(name, [this.SERVICE_UUID], (err?: Error | null | undefined) => {
      if (err) {
        console.error("[BLE] Advertising error:", err);
      } else {
        console.log(`[BLE] Advertising as: ${name}`);
      }
    });
  }

  private async handleIncomingDiscovery(peripheral: any): Promise<void> {
    const adv = peripheral.advertisement;
    if (!adv) return;

    let buffer: Buffer | null = null;

    if (adv.manufacturerData && Buffer.isBuffer(adv.manufacturerData)) {
      buffer = adv.manufacturerData;
    } else if (adv.serviceData && adv.serviceData.length > 0) {
      buffer = adv.serviceData[0].data;
    }

    if (!buffer || buffer.length < 6) return;
    if (buffer.readUInt16BE(0) !== this.MANUFACTURER_ID) return;

    const sequenceId = buffer.readUInt16BE(2);
    const ttl = buffer.readUInt8(4);

    const cacheKey = `ble_mesh:\( {this.currentRoomId}: \){sequenceId}`;

    // Using static methods
    if (CacheService.get(cacheKey)) return;
    CacheService.set(cacheKey, true, 600);

    const parsed = this.deserializePayload(buffer.subarray(6));
    if (!parsed || parsed.roomId !== this.currentRoomId) return;

    console.log(`\n[${parsed.senderName}] ${parsed.content}`);

    if (ttl > 1) {
      this.queueMeshRelay(sequenceId, ttl - 1, buffer.subarray(6));
    }
  }

  public async transmitMessage(
    msgPayload: Omit<BleChatMessage, "id" | "timestamp">
  ): Promise<void> {
    if (!this.currentRoomId) {
      throw new Error("Call setRoomContext() first");
    }

    this.localSequenceCounter = (this.localSequenceCounter + 1) % 65535;

    const fullMessage: BleChatMessage = {
      ...msgPayload,
      id: crypto.randomUUID(),
      timestamp: Date.now(),
    };

    const header = Buffer.alloc(6);
    header.writeUInt16BE(this.MANUFACTURER_ID, 0);
    header.writeUInt16BE(this.localSequenceCounter, 2);
    header.writeUInt8(5, 4);

    const payload = this.serializePayload(fullMessage);
    header.writeUInt8(payload.length, 5);

    const frame = Buffer.concat([header, payload]);

    // Using static methods
    CacheService.set(
      `ble_mesh:\( {this.currentRoomId}: \){this.localSequenceCounter}`,
      true,
      600
    );

    this.broadcastFrame(frame);
    console.log(`[You] ${fullMessage.content}`);
  }

  private queueMeshRelay(seqId: number, nextTtl: number, payload: Buffer) {
    const header = Buffer.alloc(6);
    header.writeUInt16BE(this.MANUFACTURER_ID, 0);
    header.writeUInt16BE(seqId, 2);
    header.writeUInt8(nextTtl, 4);
    header.writeUInt8(payload.length, 5);

    setTimeout(() => {
      this.broadcastFrame(Buffer.concat([header, payload]));
    }, Math.floor(Math.random() * 200));
  }

  private broadcastFrame(frame: Buffer): void {
    if (this.isSwitching) return;
    this.isSwitching = true;

    noble.stopScanning(() => {
      bleno.stopAdvertising(() => {
        try {
          if (typeof (bleno as any).startAdvertisingWithEIRData === "function") {
            const flags = Buffer.from([0x02, 0x01, 0x06]);
            (bleno as any).startAdvertisingWithEIRData(flags, frame, () => {
              this.resumeScanning();
            });
          } else {
            bleno.startAdvertising(
              `zigex-${this.currentRoomId?.substring(0, 8)}`,
              [this.SERVICE_UUID],
              () => this.resumeScanning()
            );
          }
        } catch (err) {
          console.error("[BLE] Broadcast error:", err);
          this.isSwitching = false;
        }
      });
    });
  }

  private resumeScanning() {
    setTimeout(() => {
      bleno.stopAdvertising(() => {
        noble.startScanning([this.SERVICE_UUID], true, () => {
          this.isSwitching = false;
        });
      });
    }, 400);
  }

  private serializePayload(message: BleChatMessage): Buffer {
    return Buffer.from(JSON.stringify(message), "utf-8");
  }

  private deserializePayload(buffer: Buffer): BleChatMessage | null {
    try {
      return JSON.parse(buffer.toString("utf-8")) as BleChatMessage;
    } catch {
      return null;
    }
  }
}
export const BleMeshService = new BleMeshServices();
