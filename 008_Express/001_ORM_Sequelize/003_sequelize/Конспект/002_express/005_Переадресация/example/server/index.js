// server index.js

// подключаю express
const express = require('express');

// создаю объект приложения
const app = express();

// Переадресация по абсолютному пути
app.use('/index', function (req, res) {
  res.redirect('https://metanit.com');
});

// Переадресация по односительному пути
app.use('/home/bar', function (req, res) {
  res.redirect('/about'); // Переадресация относительно каталога
});

// Переадресация относительно текущего адреса на адрес на том же уровне:
app.use('/home/foo/bar', function (req, res) {
  res.redirect('./about');
});

// Переадресация на адрес, который располагается уровнем выше:
app.use('/home/foo/bar', function (req, res) {
  res.redirect('../about');
});

//Переадресация на уровень выше:
app.use('/home/foo/bar', function (req, res) {
  res.redirect('.');
});

// Переадресация на два уровня выше:
app.use('/home/foo/bar', function (req, res) {
  res.redirect('..');
});

// сам каталог
app.use('/about', function (req, res) {
  res.send('<h1>About</h1>');
});

//По умолчанию при редиректе передается статусный код 302, который указывает, что ресурс временно доступен по новому адресу. Но мы можем указать статусный код 301, чтобы сделать переадресацию постоянной:
app.use('/home/foo/bar', function (request, response) {
  response.redirect(301, '/about');
});

// прослушиваю порт
app.listen(5000);
