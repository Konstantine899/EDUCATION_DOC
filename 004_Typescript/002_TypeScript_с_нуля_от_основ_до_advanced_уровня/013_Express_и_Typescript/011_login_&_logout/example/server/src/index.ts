//src index.ts
import express, { Request, Response } from "express";
import { router } from "./routes/loginRoutes";
import cookieSession from "cookie-session";

const PORT = 5000;

const app = express();

app.use(express.urlencoded({ extended: true })); // обязательно прописываю выше регистрации роутов и опциональный параметр extended: ставлю в true
// так же располагаю выше если расположить ниже регистрации роутов то это может работать не корректно
app.use(cookieSession({ keys: ["asfadsfadfs"] })); // asfadsfadfs для кодировки сессии какая это будет строка не имеет значения просто это должно быть строкой
app.use(router);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
