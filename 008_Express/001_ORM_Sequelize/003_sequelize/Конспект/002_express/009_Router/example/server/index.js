const express = require('express');
const app = express();

//Определяем Router
const productRouter = express.Router();

// определяем маршруты и их обработчики внутри роутера

productRouter.use('/create', function (req, res) {
  res.send('Добавление товара');
});

productRouter.use('/:id', function (req, res) {
  res.send(`Товар ${req.params.id}`);
});

productRouter.use('/', function (req, res) {
  res.send('Список товаров');
});

// сопотавляем роутер с конечной точкой "/products"
app.use('/products', productRouter);

app.use('/about', function (req, res) {
  res.send('О сайте');
});

app.use('/', function (req, res) {
  res.send('Главная страница');
});

app.listen(5000);
