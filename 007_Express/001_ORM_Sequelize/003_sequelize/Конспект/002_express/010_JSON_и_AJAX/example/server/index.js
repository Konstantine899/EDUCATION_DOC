const express = require('express');
const app = express();

// Создаем парсер для данных в формате json
const jsonParser = express.json();

app.post('/user', jsonParser, function (req, res) {
  console.log(req.body);
  if (!req.body) return res.sendStatus(400);
  res.json(req.body); // отправляем пришедший ответ обратно
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(5000);
