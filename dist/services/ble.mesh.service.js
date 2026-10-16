"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BleMeshService = void 0;
const noble_1 = __importDefault(require("@abandonware/noble"));
const bleno_1 = __importDefault(require("@stoprocent/bleno"));
// import { prisma } from "../config/prisma";
const cache_service_1 = require("../services/cache.service");
const prisma = null;
class BleMeshServices {
    constructor(prismaInstance, cacheInstance) {
        // Use a short 16-bit UUID placeholder for mesh filtering to save packet space
        this.MESH_UUID_16 = "fe26";
        this.MANUFACTURER_ID = 0xfe26;
        this.currentRoomId = null;
        this.localSequenceCounter = 0;
        this.isBroadcasting = false;
        this.prisma = prismaInstance;
        this.cache = cacheInstance;
        this.initializeMeshStack();
    }
    setRoomContext(roomId) {
        this.currentRoomId = roomId;
        console.log(`[Mesh] Room Context Set: ${roomId}`);
    }
    initializeMeshStack() {
        noble_1.default.on("stateChange", async (state) => {
            if (state === "poweredOn") {
                // Scan with duplicates true to act as a live continuous packet sniffer
                await noble_1.default.startScanningAsync([], true);
                console.log("[Mesh] Noble packet scanning active");
            }
        });
        noble_1.default.on("discover", async (peripheral) => {
            this.handleIncomingDiscovery(peripheral);
        });
        bleno_1.default.on("stateChange", (state) => {
            console.log(`[Mesh] Bleno state: ${state}`);
        });
    }
    async handleIncomingDiscovery(peripheral) {
        const adv = peripheral.advertisement;
        // Read from scanResponse buffer if manufacturerData isn't in main advertisement packet
        const buffer = adv?.manufacturerData || adv?.serviceData?.[0]?.data;
        if (!buffer || buffer.length < 12)
            return;
        // Verify company/mesh identifier
        if (buffer.readUInt16BE(0) !== this.MANUFACTURER_ID)
            return;
        const sequenceId = buffer.readUInt16BE(2);
        const ttl = buffer.readUInt8(4);
        if (!this.currentRoomId)
            return;
        const cacheKey = `ble_mesh:${this.currentRoomId}:${sequenceId}`;
        if (await cache_service_1.CacheService.get(cacheKey))
            return; // Already processed/relayed this frame
        await cache_service_1.CacheService.set(cacheKey, true, 600);
        const parsedMessage = this.deserializeBinaryPayload(buffer.subarray(5));
        if (!parsedMessage || parsedMessage.roomId !== this.currentRoomId.substring(0, 4))
            return;
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
    async transmitMessage(msgPayload) {
        this.localSequenceCounter = (this.localSequenceCounter + 1) % 65535;
        const compressedMessage = {
            ...msgPayload,
            roomId: this.currentRoomId?.substring(0, 4) || "0000", // Chop room to 4-character ID to fit packet limits
        };
        const header = Buffer.alloc(5);
        header.writeUInt16BE(this.MANUFACTURER_ID, 0);
        header.writeUInt16BE(this.localSequenceCounter, 2);
        header.writeUInt8(4, 4); // Set TTL to 4 hops maximum
        const payload = this.serializeBinaryPayload(compressedMessage);
        if (payload.length > 26) {
            console.error(`[Mesh] Message content too long! String byte size must stay minimal.`);
            return;
        }
        const fullFrame = Buffer.concat([header, payload]);
        await cache_service_1.CacheService.set(`ble_mesh:${this.currentRoomId}:${this.localSequenceCounter}`, true, 600);
        this.broadcastFrame(fullFrame);
    }
    async queueMeshRelay(seqId, nextTtl, payload) {
        const relayHeader = Buffer.alloc(5);
        relayHeader.writeUInt16BE(this.MANUFACTURER_ID, 0);
        relayHeader.writeUInt16BE(seqId, 2);
        relayHeader.writeUInt8(nextTtl, 4);
        setTimeout(() => {
            this.broadcastFrame(Buffer.concat([relayHeader, payload]));
        }, Math.random() * 250); // Jitter delay to avoid signal collisions
    }
    broadcastFrame(frameBuffer) {
        if (this.isBroadcasting)
            return;
        this.isBroadcasting = true;
        // Turn off scanner to free physical radio for Tx transmission on Linux
        noble_1.default.stopScanningAsync().then(() => {
            bleno_1.default.stopAdvertising(() => {
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
                const blenoRaw = bleno_1.default;
                if (typeof blenoRaw.startAdvertisingWithEIRData === "function") {
                    blenoRaw.startAdvertisingWithEIRData(advData, scanData, (err) => {
                        if (err)
                            console.error("[Mesh] Tx Burst failure:", err);
                        // Keep broadcasting the packet for 400ms so neighbors intercept it
                        setTimeout(() => {
                            bleno_1.default.stopAdvertising(() => {
                                this.isBroadcasting = false;
                                // Instantly pivot back to sniffer mode
                                noble_1.default.startScanningAsync([], true);
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
    serializeBinaryPayload(msg) {
        const nameBuf = Buffer.from(msg.senderName.substring(0, 5), "utf8"); // Max 5 chars name
        const contentBuf = Buffer.from(msg.content.substring(0, 15), "utf8"); // Max 15 chars msg text
        const metaByte = ((msg.role === "supervisor" ? 1 : 0) << 7) |
            ((msg.isAdmin ? 1 : 0) << 6) |
            ((["text", "code", "task_link", "announcement"].indexOf(msg.type) & 0x03) << 4);
        const fixedHeader = Buffer.alloc(7);
        fixedHeader.write(msg.roomId.substring(0, 4), 0, 4, "utf8"); // 4 bytes room identifier
        fixedHeader.writeUInt8(parseInt(msg.senderId.substring(0, 2), 16) || 0, 4); // 1 byte short senderId
        fixedHeader.writeUInt8(metaByte, 5);
        fixedHeader.writeUInt8(nameBuf.length, 6);
        return Buffer.concat([fixedHeader, nameBuf, contentBuf]);
    }
    deserializeBinaryPayload(buffer) {
        try {
            if (buffer.length < 7)
                return null;
            const roomId = buffer.toString("utf8", 0, 4);
            const senderId = buffer.readUInt8(4).toString(16);
            const metaByte = buffer.readUInt8(5);
            const nameLen = buffer.readUInt8(6);
            const role = (metaByte & 0x80) ? "supervisor" : "student";
            const isAdmin = !!(metaByte & 0x40);
            const typeIndex = (metaByte & 0x30) >> 4;
            const types = ["text", "code", "task_link", "announcement"];
            const type = types[typeIndex] || "text";
            const senderName = buffer.toString("utf8", 7, 7 + nameLen);
            const content = buffer.toString("utf8", 7 + nameLen);
            return { roomId, senderId, role, isAdmin, type, senderName, content };
        }
        catch {
            return null;
        }
    }
}
exports.BleMeshService = new BleMeshServices(prisma, new cache_service_1.CacheService());
