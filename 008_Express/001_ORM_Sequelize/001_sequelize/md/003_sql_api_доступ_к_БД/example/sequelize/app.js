//app.js
const express = require("express");
const { sequelize, User } = require("./models");

const app = express(); // создаю экземпляр класса express
app.use(express.json()); //регистрирую middleware парсер json

app.post("/users", async (request, response) => {
  const { name, email, role } = request.body; //Достаю из тела запроса
  try {
    const user = await User.create({ name, email, role });
    return response.json(user);
  } catch (error) {
    console.log(error);
    return response.status(500).json(error);
  }
});

app.listen({ port: 5000 }, async () => {
  console.log(`Сервер запущен на http://localhost:5000`);
  await sequelize.authenticate();
  console.log(`База Данных подключена`);
});
