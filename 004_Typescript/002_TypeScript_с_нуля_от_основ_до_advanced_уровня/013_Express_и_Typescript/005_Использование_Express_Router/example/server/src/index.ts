//src index.ts
import express, { Request, Response } from "express";
import { router } from "./routes/loginRoutes";

const PORT = 5000;

const app = express();

app.use(router);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
