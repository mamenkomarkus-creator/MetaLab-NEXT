import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "docs/presentation");

await QRCode.toFile(path.join(out, "qr-github.png"), "https://github.com/mamenkomarkus-creator/MetaLab-NEXT", {
  width: 256,
  margin: 1,
});
await QRCode.toFile(
  path.join(out, "qr-world.png"),
  "https://vrchat.com/home/world/wrld_b1c73436-f022-4f98-9172-671f9f0da989/info",
  { width: 256, margin: 1 },
);
console.log("wrote QR codes");
