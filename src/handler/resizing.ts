import { Router, Request, Response } from 'express';
import imgs from '../utils/_DATA';

const resizing = Router();

resizing.get('/', async (req: Request, res: Response) => {
  const name = req.query.name;
  const width = req.query.width;
  const height = req.query.height;

  if (name === undefined || width === undefined || height === undefined) {
    return res.status(400).send('Check that you have entered all the parameters');
  }

  const imgName = name as string;
  if (!imgs.includes(imgName)) {
    return res.status(400).send('We do not have images match the name you entered');
  }

  const imgWidth = parseInt(width as string);
  const imgHeight = parseInt(height as string);
  if (Number.isNaN(imgWidth) || Number.isNaN(imgHeight)) {
    return res.status(400).send('Enter Numerical values for width and height');
  }

  if (imgWidth <= 0 || imgHeight <= 0) {
    return res.status(400).send('Enter valid values for dimensions no 0 or -ve');
  }
});
