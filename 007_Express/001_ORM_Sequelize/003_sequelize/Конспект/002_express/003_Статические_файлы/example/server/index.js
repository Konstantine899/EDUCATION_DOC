// server index.js

// подключаю express
const express = require('express');

// создаю объект приложения
const app = express();

app.use('/static', express.static(__dirname + '/public'));

console.log(__dirname);

app.use('/', function (req, res) {
  res.send('<h1>Главная страница</h1>');
});

// прослушиваю порт
app.listen(5000);
