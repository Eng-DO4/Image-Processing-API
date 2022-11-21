import express, { Response, Request } from 'express';
import resizing from './handler/resizing';

const app = express();

const port = 3000;

app.get('/', (req: Request, res: Response): void => {
  res.send('Hello at server 🌍🌏🌎');
});

app.listen(port, (): void => {
  console.log(`Enter Server: http://localhost:${port}`);
});

app.use(resizing);

export default app;
