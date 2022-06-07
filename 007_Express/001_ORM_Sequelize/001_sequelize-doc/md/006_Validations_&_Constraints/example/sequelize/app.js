//app.js
const express = require("express");
const { sequelize, User, Post } = require("./models");
const { request, response } = require("express");

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

app.get("/users", async (request, response) => {
  try {
    const users = await User.findAll();
    return response.json(users);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "Что-то пошло не так" });
  }
});

app.get("/users/:uuid", async (request, response) => {
  const { uuid } = request.params; // получаю из строки запроса
  try {
    const users = await User.findOne({
      where: {
        uuid: uuid,
      },
      include: ["posts"], // указываю всевдоним модели Post
    });
    return response.json(users);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "Что-то пошло не так" });
  }
});

app.post("/posts", async (request, response) => {
  const { userUuid, body } = request.body; // Получаю из тела запроса body это переменная тела запроса а на само тело запроса
  try {
    //Ищу пользователя
    const user = await User.findOne({
      where: {
        uuid: userUuid,
      },
    });
    //Создаю сообщение
    //связываю сообщение с определенным пользователем
    const post = await Post.create({ body, userId: user.id });
    return response.jsonp(post);
  } catch (error) {
    console.log(error);
    return response.status(500).json(error);
  }
});

app.get("/posts", async (request, response) => {
  try {
    const posts = await Post.findAll({
      include: ["user"],
    });
    return response.json(posts);
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
