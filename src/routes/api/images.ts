import express from 'express';
import path from 'path';
import checkFileExist from '../../utilities/file_checker';
import resizeImage from '../../utilities/sharp';

// Create images route object
const images = express.Router();

// set the images endpoint
images.get('/', async (req, res) => {
  try {
    // get the filename from the url parameter
    const fileName: string = req.query.filename as string;
    // get the width from the url parameter
    const w: string = req.query.width as string;
    // get the height from the url parameter
    const h: string = req.query.height as string;
    // parse width and heigh into numbers
    const width: number = parseInt(w);
    const height: number = parseInt(h);
    // expected image name after resizing
    const thumbfileName = `${fileName}_${width}x${height}.jpg`;

    // first check if filename exist on images dir
    if (!(await checkFileExist(`${fileName}.jpg`, 'images'))) {
      res.send('Please, Enter a valid filename');
      //check if the width and height doesn't exist => show the origin image
    } else if (
      req.query.width === undefined &&
      req.query.height === undefined
    ) {
      res.sendFile(path.resolve(`assets/images/${fileName}.jpg`));
      // check if width and height are valid numbers
    } else if (isNaN(width) || isNaN(height)) {
      res.send('Please, Enter a valid number for width and height');
    } else {
      // check if the image resized before and exist on thumb dir
      if (await checkFileExist(thumbfileName, 'thumb')) {
        // show image on the browser as this size already exist
        res.sendFile(
          path.resolve(`assets/thumb/${fileName}_${width}x${height}.jpg`)
        );
        // if this size doesn't exist then resize it
      } else {
        resizeImage(fileName, width, height, res);
      }
    }
  } catch (err) {
    console.error(err);
  }
});

// Export images route object
export default images;
