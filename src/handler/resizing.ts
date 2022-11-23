import { Router, Request, Response } from 'express';
import imgs from '../utils/_DATA';
import resizer from '../models/resizer';
import path from 'path';

const resizing = Router();

resizing.get('/resize', async (req: Request, res: Response) => {
  const name = req.query.name;
  const width = req.query.width;
  const height = req.query.height;

  if (name === undefined || width === undefined || height === undefined) {
    return res
      .status(400)
      .send('Check that you have entered all the parameters');
  }

  const imgName = name as string;
  if (!imgs.includes(imgName)) {
    return res
      .status(400)
      .send('We do not have images match the name you entered');
  }

  const imgWidth = +(width as string);
  const imgHeight = +(height as string);
  if (Number.isNaN(imgWidth) || Number.isNaN(imgHeight)) {
    return res.status(400).send('Only numerical values for width & height');
  }

  if (imgWidth <= 0 || imgHeight <= 0) {
    return res
      .status(400)
      .send('Enter valid values for dimentions no 0 or -ve');
  }

  await resizer(imgName, imgWidth, imgHeight);
  let thumbfolder = path.resolve(__dirname, `../../assets/thumb`);
  let thumbName = `${imgName}-${imgWidth}-${imgHeight}`
  let thumbsrc = path.resolve(thumbfolder, `${thumbName}.jpg`);
  return res.status(200).sendFile(thumbsrc)
});

export default resizing;
