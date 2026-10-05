# Bluetooth Mesh Chat Test with  `@nodert-win10-rs4`

## Overview

Serverless BLE broadcast chat for the Windows command line. Two laptops publish and watch raw Bluetooth LE advertisements through the WinRT APIs. There is no GATT connection, no pairing, and no IP network.

`win-mesh.js` uses `BluetoothLEAdvertisementPublisher` and `BluetoothLEAdvertisementWatcher` via NodeRT. `@abandonware/bleno` cannot advertise on the Windows Bluetooth stack, so this path does not use it.

## Requirements

- Windows 10 1703 or later, with Bluetooth on
- A radio that supports LE advertising (most laptop adapters do; some USB dongles do not)
- Node.js 18 LTS recommended. Current Node often fails to rebuild the 2019 NodeRT bindings
- Visual Studio 2022 Build Tools, with the Desktop development with C++ workload
- Python available for node-gyp


## Install

```bat
mkdir win-ble-chat
cd win-ble-chat
npm init -y
npm install @nodert-win10-rs4/windows.devices.bluetooth.advertisement
npm install @nodert-win10-rs4/windows.storage.streams
```

Leave `package.json` as CommonJS. Do not set `"type": "module"`. NodeRT exports are `require()` modules.

If install fails on a newer Node, switch to Node 18, or try the matching `@nodert-win11-*` advertisement and streams packages and edit the two `require()` lines.

Copy `win-mesh.js` into the project and run it on each laptop:

```bat
node win-mesh.js
```

Type a line and press Enter. The other machine prints it if it is scanning during the burst. `/id` prints this process's node id.

## Packet

Company id `0xFFFE` (Microsoft's sample unassigned id; lab use only).

```text
[nodeId hi][nodeId lo][seq][utf8 text…]
```

20 bytes total, so 17 bytes of text. Longer input is clipped. Each line is advertised for 1.5 seconds, then the publisher stops.

A 2-byte random node id and a 1-byte sequence number are stored for 60 seconds. Frames from this node, or a sequence already seen, are dropped. That covers a peer rebroadcast and a second sweep of the same burst. The local watcher usually does not receive advertisements from the same radio.

## Limits

- Burst beacon, not a mesh. No relay, fragmentation, acks, or encryption.
- The other radio must be scanning during the 1.5 second window.
- Legacy advertisement payload is small. Going past about 20 bytes of manufacturer data makes `Start()` throw.
- Range is normal BLE range, a room, not a building.
- `0xFFFE` must not be used in anything you ship. Get a company id from the Bluetooth SIG.
- NodeRT packages under `@nodert-win10-rs4` last published around 2019 and may need a rebuild.

## Failure checks

- Publisher status `aborted`: the adapter cannot advertise, Bluetooth is off, or the payload is too large.
- Watcher stops immediately: Bluetooth permission or the radio does not support passive LE scan.
- node-gyp errors: install VS 2022 Build Tools, then `npm rebuild` under Node 18.