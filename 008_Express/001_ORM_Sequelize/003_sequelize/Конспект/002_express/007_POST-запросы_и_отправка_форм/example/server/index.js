const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//создаем parser  для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/register', urlencodedParser, function (req, res) {
  res.sendFile(__dirname + '/register.html');
});

app.post('/register', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  res.send(`${req.body.userName} - ${req.body.userAge}`);
});

app.get('/', function (req, res) {
  res.send('Главная страница');
});

app.listen(5000);
