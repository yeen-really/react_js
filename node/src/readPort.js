// import fs from "node:fs/promises";
import fs from "fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const filepath = path.resolve(__dirname, "dist", "port.txt");

const result = fs.readFileSync(filepath, {
  encoding: "utf-8",
});
console.log(result);
