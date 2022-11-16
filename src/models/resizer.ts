import sharp from 'sharp';

function resizer(
  imgsrc: string,
  width: number,
  height: number,
  thumbsrc: string
): void {
  sharp(imgsrc).resize(width, height).toFile(thumbsrc);
}

export default resizer;
