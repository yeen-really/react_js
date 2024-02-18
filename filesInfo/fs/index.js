import fsp from "node:fs/promises";
import path from "path";

const readDir = async () => {
  const dirpath = path.resolve(process.cwd(), "./fs/dir");

  try {
    const dirData = await fsp.readdir(dirpath);
    dirData.map(async (file) => {
      const filePath = path.join(dirpath, file);

      const stats = await fsp.stat(filePath, { bigint: true });
      console.log(file + " | " + stats.size + " | " + stats.birthtime);
    });
  } catch (e) {
    console.log(e);
  }
};

readDir();

// console.log(path.resolve(process.cwd(), 'file.js'))
// console.log(123)

// const filepath = path.resolve(process.cwd(), 'file.js')

// console.log(path.parse(filepath))

// const getDir = async (dirpath) => {
//     try{
//         const dirList = await fsp.readdir(dirpath);
//         const promises = dirList.map(async (filePath) => {
//             const absFilePath = path.resolve(dirpath, filePath)
//             const fileData = await fsp.readFile(absFilePath, 'utf-8')
//             return fileData.length;
//          })
//         // console.log(dirList)
//         Promise.all(promises).then((res) => {
//             console.log(res)
//         })
//     } catch(e) {
//         console.log(e)
//     }
// }

// getDir(path.resolve(process.cwd(), './fs/dir'))
