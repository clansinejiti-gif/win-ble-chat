"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BleMeshService = void 0;
const noble_1 = __importDefault(require("@abandonware/noble"));
const bleno_1 = __importDefault(require("@stoprocent/bleno"));
const prisma_1 = require("../config/prisma");
const cache_service_1 = require("../services/cache.service");
const crypto_1 = __importDefault(require("crypto"));
class BleMeshServices {
    constructor(prismaInstance, cacheInstance) {
        this.SERVICE_UUID = "0000fe2600001000800000805f9b34fb";
        this.MANUFACTURER_ID = 0xfe26;
        this.currentRoomId = null;
        this.localSequenceCounter = 0;
        this.isSwitching = false;
        this.prisma = prismaInstance;
        this.cache = cacheInstance;
        this.initializeMeshStack();
    }
    setRoomContext(roomId) {
        this.currentRoomId = roomId;
        // Restart advertising with new room name
        if (bleno_1.default.state === "poweredOn") {
            this.startAdvertising();
        }
    }
    initializeMeshStack() {
        noble_1.default.on("stateChange", async (state) => {
            if (state === "poweredOn") {
                await noble_1.default.startScanningAsync([this.SERVICE_UUID], true);
            }
        });
        noble_1.default.on("discover", async (peripheral) => {
            this.handleIncomingDiscovery(peripheral);
        });
        bleno_1.default.on("stateChange", (state) => {
            if (state === "poweredOn" && this.currentRoomId) {
                this.startAdvertising();
            }
        });
    }
    startAdvertising() {
        if (!this.currentRoomId)
            return;
        bleno_1.default.startAdvertising(`zigex-${this.currentRoomId.substring(0, 10)}`, [
            this.SERVICE_UUID,
        ]);
    }
    async handleIncomingDiscovery(peripheral) {
        const adv = peripheral.advertisement;
        if (!adv?.manufacturerData)
            return;
        const buffer = adv.manufacturerData;
        if (buffer.length < 6 || buffer.readUInt16BE(0) !== this.MANUFACTURER_ID)
            return;
        const sequenceId = buffer.readUInt16BE(2);
        const ttl = buffer.readUInt8(4);
        // FIXED: interpolation
        const cacheKey = `ble_mesh:${this.currentRoomId}:${sequenceId}`;
        if (await cache_service_1.CacheService.get(cacheKey))
            return;
        cache_service_1.CacheService.set(cacheKey, true, 600);
        const parsedMessage = this.deserializePayload(buffer.subarray(6));
        if (!parsedMessage || parsedMessage.roomId !== this.currentRoomId)
            return;
        await this.prisma.chatMessage.create({
            data: {
                id: parsedMessage.id,
                roomId: parsedMessage.roomId,
                senderId: parsedMessage.senderId,
                senderName: parsedMessage.senderName,
                role: parsedMessage.role,
                isAdmin: parsedMessage.isAdmin,
                type: parsedMessage.type,
                content: parsedMessage.content,
                timestamp: new Date(parsedMessage.timestamp ?? Date.now()),
            },
        });
        if (ttl > 1) {
            await this.queueMeshRelay(sequenceId, ttl - 1, buffer.subarray(6));
        }
    }
    async transmitMessage(msgPayload) {
        this.localSequenceCounter = (this.localSequenceCounter + 1) % 65535;
        const fullMessage = {
            ...msgPayload,
            id: crypto_1.default.randomUUID(),
            timestamp: Date.now(),
            signature: "todo-sign", // you left this out
        };
        const header = Buffer.alloc(6);
        header.writeUInt16BE(this.MANUFACTURER_ID, 0);
        header.writeUInt16BE(this.localSequenceCounter, 2);
        header.writeUInt8(5, 4);
        const payload = this.serializePayload(fullMessage);
        header.writeUInt8(payload.length, 5);
        cache_service_1.CacheService.set(`ble_mesh:${this.currentRoomId}:${this.localSequenceCounter}`, true, 600);
        this.broadcastFrame(Buffer.concat([header, payload]));
    }
    async queueMeshRelay(seqId, nextTtl, payload) {
        const relayHeader = Buffer.alloc(6);
        relayHeader.writeUInt16BE(this.MANUFACTURER_ID, 0);
        relayHeader.writeUInt16BE(seqId, 2);
        relayHeader.writeUInt8(nextTtl, 4);
        relayHeader.writeUInt8(payload.length, 5);
        setTimeout(() => {
            this.broadcastFrame(Buffer.concat([relayHeader, payload]));
        }, Math.random() * 200);
    }
    broadcastFrame(frameBuffer) {
        if (this.isSwitching)
            return;
        this.isSwitching = true;
        // FIX: must stop scanning before advertising on same adapter
        noble_1.default.stopScanningAsync().then(() => {
            bleno_1.default.stopAdvertising(() => {
                // FIX: correct EIR data format
                const advData = Buffer.concat([
                    Buffer.from([0x02, 0x01, 0x06]), // Flags
                    Buffer.from([0x03, 0x03, 0x0a, 0x18]), // Service UUID placeholder
                ]);
                // Put your mesh frame in scan response as manufacturer data
                const scanData = frameBuffer;
                // @stoprocent/bleno supports raw buffers like this:
                bleno_1.default.startAdvertisingWithEIRData(advData, scanData, (err) => {
                    this.isSwitching = false;
                    // Resume scanning after 500ms broadcast window
                    setTimeout(() => {
                        bleno_1.default.stopAdvertising(() => {
                            noble_1.default.startScanningAsync([this.SERVICE_UUID], true);
                        });
                    }, 500);
                });
            });
        });
    }
    serializePayload(message) {
        return Buffer.from(JSON.stringify(message), "utf-8");
    }
    deserializePayload(buffer) {
        try {
            return JSON.parse(buffer.toString("utf-8"));
        }
        catch {
            return null;
        }
    }
}
exports.BleMeshService = new BleMeshServices(prisma_1.prisma, new cache_service_1.CacheService());
