const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const pool = mysql.createPool({
  connectionLimit: 5,
  host: '10.178.4.52',
  port: '3306',
  user: 'asu8',
  database: 'network',
  password: '123',
});

app.set('view engine', 'hbs');

// Получение данных
app.get('/', function (req, res) {
  pool.query(`SELECT * FROM sim2`, function (err, data) {
    if (err) console.log(err);
    res.render('index.hbs', {
      simCards: data,
    });
  });
});

// Возвращаем форму для обновления данных
app.get('/create', function (req, res) {
  res.render('create.hbs');
});

// получаем отправленные данные и добавляем их в БД
app.post('/create', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  const operator = req.body.operator;
  const number = req.body.number;
  pool.query(
    `INSERT INTO sim2(operator, number) VALUES(?,?)`,
    [operator, number],
    function (err, data) {
      if (err) return console.log(err);
      res.redirect('/');
    }
  );
});

// Получаем id редактируемого номера, получаем его из БД и отправляем с формой редактирования.
app.get('/edit/:id', function (req, res) {
  const id = req.params.id;
  pool.query(`SELECT * FROM sim2 WHERE id=?`, [id], function (err, data) {
    if (err) return console.log(err);
    res.render('edit.hbs', {
      sim: data[0],
    });
  });
});

// получаем отредактированные данные и отправляем их в БД
app.post('/edit', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  const operator = req.body.operator;
  const number = req.body.number;
  const id = req.body.id;
  pool.query(
    'UPDATE users SET operator=?, number=? WHERE id=?',
    [operator, number, id],
    function (err, data) {
      if (err) return console.log(err);
      res.redirect('/');
    }
  );
});

// получаем id удаляемого пользователя и удаляем его из бд
app.post('/delete/:id', function (req, res) {
  const id = req.params.id;
  pool.query(`DELETE FROM sim2 WHERE id=?`, [id], function (err, data) {
    if (err) console.log(err);
    res.redirect('/');
  });
});

app.listen(5000, function () {
  console.log('Сервер запущен');
});
