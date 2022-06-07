const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const simCardRouter = require('./routes/simCardRouter');
const homeRouter = require('.//routes/homeRouter');

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));

// определяю маршрут
app.use('/cards', simCardRouter);
app.use('/', homeRouter);

// Обработка ошибки 404
app.use(function (req, res, next) {
  res.status(404).send('Не найдено');
});

app.listen(5000);
