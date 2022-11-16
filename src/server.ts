import express, { Response, Request } from 'express';

const app = express();

const port = 3000;

app.get('/', (req: Request, res: Response): void => {
  res.send('Hello at server 🌍🌏🌎');
});

app.listen(port, (): void => {
  console.log(`Enter Server: http://localhost:${port}`);
});
