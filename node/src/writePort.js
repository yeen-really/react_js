import fsp from "node:fs/promises";
import path from "node:path";
import url from "node:url";


const __dirname = path.dirname(url.fileURLToPath(import.meta.url));


const mkfile = async () => {
    const filepath = path.resolve(__dirname, 'dist', 'port.txt');
    try {
        await fsp.access(filepath);
        console.log('file already exists');
    }
    catch {
    await fsp.writeFile(filepath, 'enviroment variable PORT = 8080', 'utf-8');
    console.log('file created') ;


    }
}
    mkfile();

