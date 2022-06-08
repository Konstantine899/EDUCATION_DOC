// server index.js

// подключаю express
const express = require('express');

// создаю объект приложения
const app = express();

// Обработка статических файлов
app.use('/static', express.static(__dirname + '/public'));

// Обработка по адресу /about
app.get('/about', function (req, res) {
  res.send('<h1>О сайте</h1>');
});

// Обработка по адресу /contact
app.use('/contact', function (req, res) {
  res.send('<h1>Контакты</h1>');
});
// обработка запроса к корню веб-сайта
app.use('/', function (req, res) {
  res.send('<h1>Главная страница</h1>');
});

app.get('/bo?k', function (req, res) {
  res.send(req.url);
});

app.get('/bo+k', function (req, res) {
  res.send(req.url);
});

app.get('/bo*k', function (req, res) {
  res.send(req.url);
});

app.get('/book(.html)?', function (req, res) {
  res.send(req.url);
});

app.get(/.*(\.)html$/, function (req, res) {
  res.send(req.url);
});

// прослушиваю порт
app.listen(5000);
