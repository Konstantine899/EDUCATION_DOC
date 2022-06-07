const express = require('express');

const app = express();

app.get('/products/:productId', function (req, res) {
  res.send('productId: ' + req.params['productId']);
});

app.get('/categories/:categoryId/products/:productsId', function (req, res) {
  let catId = req.params['categoryId'];
  let prodId = req.params['productsId'];
  res.send(`Категория: ${catId} Товар: ${prodId}`);
});

app.get('/book/:pageName.:pageExt', function (req, res) {
  let pageName = req.params['pageName'];
  let pageExt = req.params['pageExt'];
  res.send(`Запрошенный файл: ${pageName}.${pageExt}`);
});

app.listen(5000);
