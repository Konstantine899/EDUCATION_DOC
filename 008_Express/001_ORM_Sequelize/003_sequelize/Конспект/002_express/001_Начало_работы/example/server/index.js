// server index.js

// подключаю express
const express = require('express');

// создаю объект приложения

const app = express();

// вспомогательные функции middleware
app.use(function (req, res, next) {
  console.log('Middleware 1');
  next();
  // next(); останавливаю вызов следующего middleware
});

app.use(function (req, res, next) {
  console.log('Middleware 2');
  next();
});

// определяю обработчик маршрута
app.get('/', function (req, res, next) {
  console.log('middleware сопоставленный с маршрутом');
  res.send('<h2>Главная страница</h2>');
  next();
});

app.get('/card', function (req, res) {
  res.send('<h2>Страници Сим карты</h2>');
});

// прослушиваю порт

app.listen(5000);
