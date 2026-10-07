const { createBluetooth } = require("node-ble");

async function main() {
  const { bluetooth, destroy } = createBluetooth();
  const adapter = await bluetooth.defaultAdapter();
  await adapter.startDiscovery();
  console.log("Scanning...");

  // wait for device
  const device = await adapter.waitDevice("XX:XX:XX:XX:XX:XX"); // put your MAC here
  // or discover any: const device = await adapter.waitDevice()

  console.log(
    `Found: ${await device.getAddress()} - ${await device.getName()}`,
  );
  await adapter.stopDiscovery();

  await device.connect();
  console.log("Connected");

  const gatt = await device.gatt();
  const services = await gatt.services();
  console.log("Services:", services);

  // Example: read battery level
  const batteryService = await gatt.getPrimaryService("battery_service");
  const batteryLevelChar =
    await batteryService.getCharacteristic("battery_level");
  const batteryLevel = await batteryLevelChar.readValue();
  console.log("Battery:", batteryLevel.getUint8(0) + "%");

  await device.disconnect();
  destroy();
}

main().catch(console.error);
