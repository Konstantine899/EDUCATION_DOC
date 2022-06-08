// server index.js

// подключаю express
const express = require('express');

// создаю объект приложения
const app = express();

// определяю обработчик маршрута
// app.use('/', function (req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

app.use('/home/foo/bar', function (req, res) {
  res.status(404).send('Не найдено');
});

// прослушиваю порт
app.listen(5000);
