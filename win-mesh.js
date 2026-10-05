const advertisement = require('@nodert-win10-rs4/windows.devices.bluetooth.advertisement')
const streams = require('@nodert-win10-rs4/windows.storage.streams')
const readline = require('readline')

const {
  BluetoothLEAdvertisementPublisher,
  BluetoothLEAdvertisementWatcher,
  BluetoothLEManufacturerData
} = advertisement;
const { DataWriter, DataReader } = streams;

// Custom Company ID to filter our app's traffic (0xFFFE is standard for testing/development)
const CHAT_COMPANY_ID = 0xfffe;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});

console.log("--- Starting Windows Native BLE Mesh Chat ---");

// 1. RECEIVING: Windows LE Advertisement Watcher

const watcher = new BluetoothLEAdvertisementWatcher()

watcher.on('received', (_sender, args) => {
    const manufacturerSections = args.advertisement.manufacturerData;

    // Look through incoming advertisement for our Company ID
    
    for (let i = 0; i<manufacturerSections.size; i++) {
        const section = manufacturerSections.getAt(i);

        if (section.companyId === CHAT_COMPANY_ID) {
            const dataReader = DataReader.fromBuffer(section.data);
            const messageBytes = new Uint8Array(section.data.length);
            dataReader.readBytes(messageBytes);

            const text = new TextDecoder().decode(messageBytes);

            //Clean CLI line print 
            readline.clearLine(process.stdout, 0);
            readline.cursorTo(process.stdout, 0);
            console.log(`[Peer]: ${text}`);
            rl.prompt();           
        }
    }
})

// Start listening for nearby packets
watcher.start()
console.log("[System] Watcher started. Listening for incoming peers messages...")
rl.prompt();

// 2. TRANSMITTING: Windows LE Advertisement Publisher

async function broadcastMessage(text) {
    const publisher = new BluetoothLEAdvertisementPublisher();

    // Convert string to byte buffer via WinRT DataWriter 
    const dataWriter = new DataWriter();
    const encodedText = new TextEncoder().encode(text.substring(0, 24)); // Cap length for payload
    dataWriter.writeBytes(Array.from(encodedText));

    const manufacturerData = new BluetoothLEManufacturerData();
    manufacturerData.companyId = CHAT_COMPANY_ID;
    manufacturerData.data = dataWriter.datachBuffer();

    publisher.advertisement.manufacturerData.append(manufacturerData);

    // Windows allows concurrent publishing & watching on modern updates,
    // but stopping the watcher briefly reduces hardware collision risk.
    watcher.stop();

    publisher.start();

    // Broadcast for 2 seconds so the other laptop sweeps and captures it
    await new Promise(resolve => setTimeout(resolve, 2000))

    publisher.stop();
    watcher.start(); // Resume Listening
    rl.prompt();
 }

//  3. CLI Input Loop

rl.on('line', async(line) => {
    const text = line.trim();
    if(text) {
        await broadcastMessage(text);
    }else  {
        rl.prompt()
    }
});