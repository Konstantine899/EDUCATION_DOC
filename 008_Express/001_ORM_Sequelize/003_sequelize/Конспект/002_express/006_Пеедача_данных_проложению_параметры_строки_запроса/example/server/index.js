// server index.js

// подключаю express
const express = require('express');

// создаю объект приложения
const app = express();

app.get('/', function (req, res) {
  res.send('<h1>Главная страница</h1>');
});

// Передача массивов
app.use('/about', function (req, res) {
  console.log(req.query);
  let names = req.query.name;
  let responseText = '<ul>';
  for (let i = 0; i < names.length; i++) {
    responseText += '<li>' + names[i] + '</li>';
  }
  responseText += '</ul>';
  res.send(responseText);
});

// Передача объектов
app.use('/about', function (req, res) {
  console.log(req.query);
  let id = req.query.user.id;
  let name = req.query.user.name;
  res.send('<h3>id:' + id + '<br>name:' + name + '</h3>');
});

// прослушиваю порт
app.listen(5000);
