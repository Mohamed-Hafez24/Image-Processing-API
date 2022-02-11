import express from 'express';
import path from 'path';
import sharp from 'sharp';

// to resize the image using sharp
function resizeImage(
  fileName: string,
  width: number,
  height: number,
  res: express.Response
) {
  // input file
  const inputFilePath = path.resolve(`assets/images/${fileName}.jpg`);
  // output file to cash the image with this size
  const outputFilePath = path.resolve(
    `assets/thumb/${fileName}_${width}x${height}.jpg`
  );
  // using sharp module to resize the image
  sharp(inputFilePath)
    .resize(width, height)
    .toFile(outputFilePath, (err) => {
      if (err) throw err;
      // show image on the browser after resizing
      res.sendFile(outputFilePath);
    });
}

export default resizeImage;
