import path from 'path';
import { existsSync, promises as fsPromises } from 'fs';

// To check the existance of files/images
async function checkFileExist(fileName: string, dir: string) {
  try {
    // create thumb directory if it does't exist
    if (!existsSync(path.resolve(`assets/${dir}`))) {
      await fsPromises.mkdir(path.resolve(`assets/${dir}`));
    }
    // read all file names inside assets/images or assets/thumb
    const files = await fsPromises.readdir(path.resolve(`assets/${dir}`));
    // check if the filename exist on dir files
    if (files.includes(fileName)) return true;
    else return false;
  } catch (err) {
    console.error(err);
  }
}

export default checkFileExist;
