import fsp from "node:fs/promises";
import path from "node:path";
import url from "node:url";


const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

console.log(__dirname);

const makedir = async () => {
  const dirpath = path.resolve(__dirname, "dist");
  try {
    await fsp.access(dirpath);
    console.log('dir already exists')

  } catch (e) {
    await fsp.mkdir(dirpath);
    console.log('dir created')
  }
};

makedir()
