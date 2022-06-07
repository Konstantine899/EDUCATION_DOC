//src index.ts
import express, { Request, Response } from "express";

const PORT = 5000;

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send(`
  <div>
  <h1>Hello</h1>
  </div>
  `);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
