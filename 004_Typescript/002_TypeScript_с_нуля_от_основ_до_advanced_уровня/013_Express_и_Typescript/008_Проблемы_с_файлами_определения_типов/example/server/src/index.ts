//src index.ts
import express from "express";
import { router } from "./routes/loginRoutes";
import bodyParser from "body-parser";

const PORT = 5000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // обязательно прописываю выше регистрации роутов и опциональный параметр extended: ставлю в true
app.use(router);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
