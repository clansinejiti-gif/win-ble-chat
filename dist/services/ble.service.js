"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BleMeshService = exports.BleMeshServices = void 0;
const crypto_1 = __importDefault(require("crypto"));
const noble_1 = __importDefault(require("@stoprocent/noble"));
const bleno_1 = __importDefault(require("@stoprocent/bleno"));
const cache_service_1 = require("./cache.service");
class BleMeshServices {
    constructor() {
        this.SERVICE_UUID = "0000fe2600001000800000805f9b34fb";
        this.MANUFACTURER_ID = 0xfe26;
        this.currentRoomId = null;
        this.localSequenceCounter = 0;
        this.isSwitching = false;
        this.initializeMeshStack();
    }
    setRoomContext(roomId) {
        this.currentRoomId = roomId;
        console.log(`[BLE] Joined room: ${roomId}`);
        if (bleno_1.default.state === "poweredOn") {
            this.startAdvertising();
        }
    }
    initializeMeshStack() {
        noble_1.default.on("stateChange", async (state) => {
            if (state === "poweredOn") {
                try {
                    await noble_1.default.startScanningAsync([this.SERVICE_UUID], true);
                    console.log("[BLE] Scanning started");
                }
                catch (err) {
                    console.error("[BLE] Scanning error:", err);
                }
            }
            else {
                noble_1.default.stopScanning();
            }
        });
        noble_1.default.on("discover", (peripheral) => {
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
        const name = `zigex-${this.currentRoomId.substring(0, 10)}`;
        bleno_1.default.startAdvertising(name, [this.SERVICE_UUID], (err) => {
            if (err) {
                console.error("[BLE] Advertising error:", err);
            }
            else {
                console.log(`[BLE] Advertising as: ${name}`);
            }
        });
    }
    async handleIncomingDiscovery(peripheral) {
        const adv = peripheral.advertisement;
        if (!adv)
            return;
        let buffer = null;
        if (adv.manufacturerData && Buffer.isBuffer(adv.manufacturerData)) {
            buffer = adv.manufacturerData;
        }
        else if (adv.serviceData && adv.serviceData.length > 0) {
            buffer = adv.serviceData[0].data;
        }
        if (!buffer || buffer.length < 6)
            return;
        if (buffer.readUInt16BE(0) !== this.MANUFACTURER_ID)
            return;
        const sequenceId = buffer.readUInt16BE(2);
        const ttl = buffer.readUInt8(4);
        const cacheKey = `ble_mesh:\( {this.currentRoomId}: \){sequenceId}`;
        // Using static methods
        if (cache_service_1.CacheService.get(cacheKey))
            return;
        cache_service_1.CacheService.set(cacheKey, true, 600);
        const parsed = this.deserializePayload(buffer.subarray(6));
        if (!parsed || parsed.roomId !== this.currentRoomId)
            return;
        console.log(`\n[${parsed.senderName}] ${parsed.content}`);
        if (ttl > 1) {
            this.queueMeshRelay(sequenceId, ttl - 1, buffer.subarray(6));
        }
    }
    async transmitMessage(msgPayload) {
        if (!this.currentRoomId) {
            throw new Error("Call setRoomContext() first");
        }
        this.localSequenceCounter = (this.localSequenceCounter + 1) % 65535;
        const fullMessage = {
            ...msgPayload,
            id: crypto_1.default.randomUUID(),
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
        cache_service_1.CacheService.set(`ble_mesh:\( {this.currentRoomId}: \){this.localSequenceCounter}`, true, 600);
        this.broadcastFrame(frame);
        console.log(`[You] ${fullMessage.content}`);
    }
    queueMeshRelay(seqId, nextTtl, payload) {
        const header = Buffer.alloc(6);
        header.writeUInt16BE(this.MANUFACTURER_ID, 0);
        header.writeUInt16BE(seqId, 2);
        header.writeUInt8(nextTtl, 4);
        header.writeUInt8(payload.length, 5);
        setTimeout(() => {
            this.broadcastFrame(Buffer.concat([header, payload]));
        }, Math.floor(Math.random() * 200));
    }
    broadcastFrame(frame) {
        if (this.isSwitching)
            return;
        this.isSwitching = true;
        noble_1.default.stopScanning(() => {
            bleno_1.default.stopAdvertising(() => {
                try {
                    if (typeof bleno_1.default.startAdvertisingWithEIRData === "function") {
                        const flags = Buffer.from([0x02, 0x01, 0x06]);
                        bleno_1.default.startAdvertisingWithEIRData(flags, frame, () => {
                            this.resumeScanning();
                        });
                    }
                    else {
                        bleno_1.default.startAdvertising(`zigex-${this.currentRoomId?.substring(0, 8)}`, [this.SERVICE_UUID], () => this.resumeScanning());
                    }
                }
                catch (err) {
                    console.error("[BLE] Broadcast error:", err);
                    this.isSwitching = false;
                }
            });
        });
    }
    resumeScanning() {
        setTimeout(() => {
            bleno_1.default.stopAdvertising(() => {
                noble_1.default.startScanning([this.SERVICE_UUID], true, () => {
                    this.isSwitching = false;
                });
            });
        }, 400);
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
exports.BleMeshServices = BleMeshServices;
exports.BleMeshService = new BleMeshServices();
