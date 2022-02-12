import path from 'path';
import sharp from 'sharp';

// to resize the image using sharp Promise<string>
async function resizeImage(
  fileName: string,
  width: number,
  height: number
): Promise<string> {
  // input file
  const inputFilePath: string = path.resolve(`assets/images/${fileName}.jpg`);
  //const inputFilePath: string = path.join(__dirname, `/../../assets/images/${fileName}.jpg`);

  // output file to cash the image with this size
  const outputFilePath: string = path.resolve(
    `assets/thumb/${fileName}_${width}x${height}.jpg`
  );
  //const outputFilePath: string = path.join(__dirname, `/../../assets/thumb/${fileName}_${width}x${height}.jpg`);

  // using sharp module to resize the image
  await sharp(inputFilePath)
    .resize(width, height)
    .toFile(outputFilePath)
    .then((): string => {
      // info => {console.log( info)}
      return `assets/thumb/${fileName}_${width}x${height}.jpg`;
    })
    .catch((err) => {
      console.log(err);
    });

  return `assets/thumb/${fileName}_${width}x${height}.jpg`;
}

export default resizeImage;
