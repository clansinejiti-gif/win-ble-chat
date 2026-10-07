const noble = require("@stoprocent/noble");

noble.on("stateChange", async (state) => {
  if (state === "poweredOn") {
    console.log("Scanning...");
    await noble.startScanningAsync();
  }
});

noble.on("discover", async (peripheral) => {
  console.log(
    `Found: ${peripheral.address} - ${peripheral.advertisement.localName}`,
  );

  if (peripheral.address === "xx:xx:xx:xx:xx:xx") {
    // your device
    await noble.stopScanningAsync();
    await peripheral.connectAsync();
    console.log("Connected to", peripheral.address);

    const { characteristics } =
      await peripheral.discoverSomeServicesAndCharacteristicsAsync(
        ["battery_service"],
        ["battery_level"],
      );
    const data = await characteristics[0].readAsync();
    console.log("Battery:", data.readUInt8(0) + "%");

    await peripheral.disconnectAsync();
  }
});
