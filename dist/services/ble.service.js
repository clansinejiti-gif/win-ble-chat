"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BleMeshServices = exports.BleMeshService = void 0;
const crypto_1 = __importDefault(require("crypto"));
const noble_1 = __importDefault(require("@abandonware/noble"));
const bleno_1 = __importDefault(require("@abandonware/bleno"));
const cache_service_1 = require("./cache.service");
class BleMeshService {
    constructor() {
        this.SERVICE_UUID = "0000fe2600001000800000805f9b34fb";
        this.CHAR_UUID = "fe27";
        this.currentRoomId = null;
        this.knownPeers = new Map();
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
        // ========== Scanning ==========
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
        // ========== Advertising + GATT Server ==========
        bleno_1.default.on("stateChange", (state) => {
            if (state === "poweredOn" && this.currentRoomId) {
                this.startAdvertising();
                this.setupGattServer();
            }
        });
    }
    startAdvertising() {
        if (!this.currentRoomId)
            return;
        const name = `zigex-${this.currentRoomId.substring(0, 10)}`;
        bleno_1.default.startAdvertising(name, [this.SERVICE_UUID], (err) => {
            if (err) {
                console.error("[BLE] Advertising error:", err.message);
            }
            else {
                console.log(`[BLE] Advertising as: ${name}`);
            }
        });
    }
    setupGattServer() {
        const characteristic = new bleno_1.default.Characteristic({
            uuid: this.CHAR_UUID,
            properties: ["write", "writeWithoutResponse", "notify"],
            onWriteRequest: (data, offset, withoutResponse, callback) => {
                try {
                    this.handleIncomingMessage(data);
                    callback(bleno_1.default.Characteristic.RESULT_SUCCESS);
                }
                catch (err) {
                    console.error("[BLE] Write handler error:", err);
                    callback(bleno_1.default.Characteristic.RESULT_UNLIKELY_ERROR);
                }
            },
        });
        const service = new bleno_1.default.PrimaryService({
            uuid: this.SERVICE_UUID,
            characteristics: [characteristic],
        });
        bleno_1.default.setServices([service], (err) => {
            if (err) {
                console.error("[BLE] Failed to set services:", err);
            }
            else {
                console.log("[BLE] GATT server ready");
            }
        });
    }
    handleIncomingDiscovery(peripheral) {
        const adv = peripheral.advertisement;
        if (!adv)
            return;
        const name = adv.localName || "";
        if (!name.startsWith("zigex-"))
            return;
        if (this.knownPeers.has(peripheral.id))
            return;
        console.log(`[BLE] Discovered peer: \( {name} ( \){peripheral.id})`);
        this.knownPeers.set(peripheral.id, peripheral);
    }
    handleIncomingMessage(data) {
        try {
            const parsed = JSON.parse(data.toString("utf-8"));
            if (!parsed || parsed.roomId !== this.currentRoomId)
                return;
            const cacheKey = `ble_mesh:${parsed.id}`;
            if (cache_service_1.CacheService.get(cacheKey))
                return;
            cache_service_1.CacheService.set(cacheKey, true, 600);
            console.log(`\n[${parsed.senderName}] ${parsed.content}`);
        }
        catch (err) {
            console.error("[BLE] Failed to parse incoming message:", err);
        }
    }
    async transmitMessage(msgPayload) {
        if (!this.currentRoomId) {
            throw new Error("Call setRoomContext() first");
        }
        const fullMessage = {
            ...msgPayload,
            id: crypto_1.default.randomUUID(),
            timestamp: Date.now(),
        };
        const payload = Buffer.from(JSON.stringify(fullMessage), "utf-8");
        console.log(`[You] ${fullMessage.content}`);
        for (const [, peripheral] of this.knownPeers) {
            this.sendToPeer(peripheral, payload);
        }
    }
    sendToPeer(peripheral, payload) {
        if (peripheral._isBusy) {
            console.log(`[BLE] Peer ${peripheral.id} is busy, skipping`);
            return;
        }
        peripheral._isBusy = true;
        console.log(`[BLE] Connecting to ${peripheral.id}...`);
        // Safety: force unlock after 8 seconds no matter what
        const busyTimer = setTimeout(() => {
            peripheral._isBusy = false;
            console.log(`[BLE] Force-unlocked busy flag for ${peripheral.id}`);
        }, 3000);
        const cleanup = () => {
            clearTimeout(busyTimer);
            peripheral._isBusy = false;
            setTimeout(() => this.startAdvertising(), 700);
        };
        if (peripheral.state === "connected") {
            peripheral.disconnect(() => {
                setTimeout(() => this.doConnectAndWrite(peripheral, payload, cleanup), 500);
            });
            return;
        }
        this.doConnectAndWrite(peripheral, payload, cleanup);
    }
    doConnectAndWrite(peripheral, payload, cleanup) {
        bleno_1.default.stopAdvertising(() => {
            peripheral.connect((err) => {
                if (err) {
                    console.error(`[BLE] Connect failed:`, err.message);
                    cleanup();
                    return;
                }
                console.log(`[BLE] Connected to ${peripheral.id}`);
                setTimeout(() => {
                    peripheral.discoverAllServicesAndCharacteristics((error, _services, characteristics) => {
                        if (error) {
                            console.error("[BLE] Discover error:", error.message);
                            peripheral.disconnect(cleanup);
                            return;
                        }
                        const char = characteristics?.find((c) => {
                            const uuid = (c.uuid || "").toLowerCase().replace(/-/g, "");
                            return uuid.includes("fe27");
                        });
                        if (!char) {
                            console.error("[BLE] Characteristic not found");
                            console.log("Available:", characteristics?.map((c) => c.uuid));
                            peripheral.disconnect(cleanup);
                            return;
                        }
                        char.write(payload, true, (writeErr) => {
                            if (writeErr) {
                                console.error("[BLE] Write failed:", writeErr.message);
                            }
                            else {
                                console.log(`[BLE] ✅ Message sent to ${peripheral.id}`);
                            }
                            peripheral.disconnect(cleanup);
                        });
                    });
                }, 500);
            });
        });
    }
}
exports.BleMeshService = BleMeshService;
exports.BleMeshServices = new BleMeshService();
