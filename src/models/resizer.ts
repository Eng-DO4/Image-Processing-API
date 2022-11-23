import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const resizer = async (
  imgName: string,
  width: number,
  height: number,
): Promise<void> => {
  let imgsfolder = path.resolve(__dirname, `../../assets`)
  let thumbfolder = path.resolve(imgsfolder, `thumb`)
  let cond = fs.existsSync(thumbfolder);
  cond === true ? cond = true : fs.mkdirSync(thumbfolder);
  let imgsrc = path.resolve(imgsfolder, `full/${imgName}.jpg`);
  let thumbName = `${imgName}-${width}-${height}`;
  let thumbsrc = path.resolve(thumbfolder, `${thumbName}.jpg`);
  cond = fs.existsSync(thumbsrc);
  if (cond === false) {
    await sharp(imgsrc).resize(width, height).toFile(thumbsrc);
  }
};

export default resizer;
