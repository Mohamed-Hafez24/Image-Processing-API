import path from 'path';
import { readdirSync, existsSync, mkdirSync } from 'fs';

// To check the existance of files/images
function checkFileExist(fileName: string, dir: string): boolean {
  try {
    // create thumb directory if it does't exist
    if (!existsSync(path.resolve(`assets/${dir}`))) {
      mkdirSync(path.resolve(`assets/${dir}`));
    }
    // read all file names inside assets/images or assets/thumb
    const files = readdirSync(path.resolve(`assets/${dir}`));
    // check if the filename exist on dir files
    // for (const file of files)
    // console.log(file);
    if (files.includes(fileName)) return true;
    else return false;
  } catch (err) {
    console.error(err);
  }
  return false;
}

export default checkFileExist;
