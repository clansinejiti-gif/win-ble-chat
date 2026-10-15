import crypto from "crypto";
import noble from "@abandonware/noble";
import bleno from "@abandonware/bleno";
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

export class BleMeshService {
  private readonly SERVICE_UUID = "0000fe2600001000800000805f9b34fb";
  private readonly CHAR_UUID = "fe27";
  private currentRoomId: string | null = null;
  private knownPeers = new Map<string, any>();

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
    // ========== Scanning ==========
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

    // ========== Advertising + GATT Server ==========
    bleno.on("stateChange", (state: string) => {
      if (state === "poweredOn" && this.currentRoomId) {
        this.startAdvertising();
        this.setupGattServer();
      }
    });
  }

  private startAdvertising(): void {
    if (!this.currentRoomId) return;

    const name = `zigex-${this.currentRoomId.substring(0, 10)}`;
    bleno.startAdvertising(name, [this.SERVICE_UUID], (err: Error | null | undefined) => {
      if (err) {
        console.error("[BLE] Advertising error:", err.message);
      } else {
        console.log(`[BLE] Advertising as: ${name}`);
      }
    });
  }

  private setupGattServer(): void {
    const characteristic = new bleno.Characteristic({
      uuid: this.CHAR_UUID,
      properties: ["write", "writeWithoutResponse", "notify"],
      onWriteRequest: (data: any, offset: any, withoutResponse: any, callback: any) => {
        try {
          this.handleIncomingMessage(data);
          callback(bleno.Characteristic.RESULT_SUCCESS);
        } catch (err) {
          console.error("[BLE] Write handler error:", err);
          callback(bleno.Characteristic.RESULT_UNLIKELY_ERROR);
        }
      },
    });

    const service = new bleno.PrimaryService({
      uuid: this.SERVICE_UUID,
      characteristics: [characteristic],
    });

    bleno.setServices([service], (err?: Error | null) => {
      if (err) {
        console.error("[BLE] Failed to set services:", err);
      } else {
        console.log("[BLE] GATT server ready");
      }
    });
  }

  private handleIncomingDiscovery(peripheral: any): void {
    const adv = peripheral.advertisement;
    if (!adv) return;

    const name = adv.localName || "";
    if (!name.startsWith("zigex-")) return;

    if (this.knownPeers.has(peripheral.id)) return;

    console.log(`[BLE] Discovered peer: \( {name} ( \){peripheral.id})`);
    this.knownPeers.set(peripheral.id, peripheral);
  }

  private handleIncomingMessage(data: Buffer): void {
    try {
      const parsed = JSON.parse(data.toString("utf-8")) as BleChatMessage;

      if (!parsed || parsed.roomId !== this.currentRoomId) return;

      const cacheKey = `ble_mesh:${parsed.id}`;
      if (CacheService.get(cacheKey)) return;
      CacheService.set(cacheKey, true, 600);

      console.log(`\n[${parsed.senderName}] ${parsed.content}`);
    } catch (err) {
      console.error("[BLE] Failed to parse incoming message:", err);
    }
  }

  public async transmitMessage(
    msgPayload: Omit<BleChatMessage, "id" | "timestamp">
  ): Promise<void> {
    if (!this.currentRoomId) {
      throw new Error("Call setRoomContext() first");
    }

    const fullMessage: BleChatMessage = {
      ...msgPayload,
      id: crypto.randomUUID(),
      timestamp: Date.now(),
    };

    const payload = Buffer.from(JSON.stringify(fullMessage), "utf-8");
    console.log(`[You] ${fullMessage.content}`);

    for (const [, peripheral] of this.knownPeers) {
      this.sendToPeer(peripheral, payload);
    }
  }

  private sendToPeer(peripheral: any, payload: Buffer): void {
  if ((peripheral as any)._isBusy) {
    console.log(`[BLE] Peer ${peripheral.id} is busy, skipping`);
    return;
  }

  (peripheral as any)._isBusy = true;
  console.log(`[BLE] Connecting to ${peripheral.id}...`);

  // Safety: force unlock after 8 seconds no matter what
  const busyTimer = setTimeout(() => {
    (peripheral as any)._isBusy = false;
    console.log(`[BLE] Force-unlocked busy flag for ${peripheral.id}`);
  }, 3000);

  const cleanup = () => {
    clearTimeout(busyTimer);
    (peripheral as any)._isBusy = false;
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

private doConnectAndWrite(
  peripheral: any,
  payload: Buffer,
  cleanup: () => void
): void {
  bleno.stopAdvertising(() => {
    peripheral.connect((err: any) => {
      if (err) {
        console.error(`[BLE] Connect failed:`, err.message);
        cleanup();
        return;
      }

      console.log(`[BLE] Connected to ${peripheral.id}`);

      setTimeout(() => {
        peripheral.discoverAllServicesAndCharacteristics(
          (error: any, _services: any[], characteristics: any[]) => {
            if (error) {
              console.error("[BLE] Discover error:", error.message);
              peripheral.disconnect(cleanup);
              return;
            }

            const char = characteristics?.find((c: any) => {
              const uuid = (c.uuid || "").toLowerCase().replace(/-/g, "");
              return uuid.includes("fe27");
            });

            if (!char) {
              console.error("[BLE] Characteristic not found");
              console.log("Available:", characteristics?.map((c: any) => c.uuid));
              peripheral.disconnect(cleanup);
              return;
            }

            char.write(payload, true, (writeErr: any) => {
              if (writeErr) {
                console.error("[BLE] Write failed:", writeErr.message);
              } else {
                console.log(`[BLE] ✅ Message sent to ${peripheral.id}`);
              }
              peripheral.disconnect(cleanup);
            });
          }
        );
      }, 500);
    });
  });
}
}

export const BleMeshServices = new BleMeshService();