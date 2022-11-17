import sharp from 'sharp';

const resizer = async (
  imgsrc: string,
  width: number,
  height: number,
  thumbsrc: string
): Promise<void> => {
  await sharp(imgsrc).resize(width, height).toFile(thumbsrc);
};

export default resizer;
