"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const ble_service_1 = require("../services/ble.service");
// ========== CONFIG ==========
const TEST_ROOM = "cohort-123"; // change this if you want
const MY_NAME = "Sultan"; // change to your name
const MY_ID = "test-user-001";
// ============================
async function start() {
    console.log("\n=================================");
    console.log("  Zigex Bluetooth Mesh Tester");
    console.log("=================================\n");
    ble_service_1.BleMeshService.setRoomContext(TEST_ROOM);
    console.log(`Joined room: ${TEST_ROOM}`);
    console.log("Scanning + Advertising started...\n");
    console.log("Type a message and press Enter to send.");
    console.log("Press Ctrl+C to quit.\n");
    const rl = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.on("line", async (input) => {
        const text = input.trim();
        if (!text)
            return;
        try {
            await ble_service_1.BleMeshService.transmitMessage({
                roomId: TEST_ROOM,
                senderId: MY_ID,
                senderName: MY_NAME,
                role: "student",
                isAdmin: false,
                type: "text",
                content: text,
                signature: ""
            });
            console.log(`\n[You] ${text}`);
        }
        catch (err) {
            console.error("Failed to send:", err);
        }
    });
}
start().catch(console.error);
