const Sequelize = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Определяем объекты Sequelize
const sequelize = new Sequelize('network', 'asu8', '123', {
  dialect: 'mysql',
  host: '10.178.4.52',
});

// Определяем модель
const SimCard = sequelize.define('simCard', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  operator: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  number: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

app.set('view engine', 'hbs'); // определяю движок handlebars

// синхронизация с бд, после успшной синхронизации запускаем сервер
sequelize
  .sync()
  .then(() => {
    app.listen(5000, function () {
      console.log('Сервер ожидает подключения...');
    });
  })
  .catch((err) => console.log(err));

// получение данных
app.get('/', function (req, res) {
  SimCard.findAll({ raw: true })
    .then((data) => {
      res.render('index.hbs', {
        cards: data,
      });
    })
    .catch((err) => console.log(err));
});

app.get('/create', function (req, res) {
  res.render('create.hbs');
});

// Добавление данных
app.post('/create', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);

  const operator = req.body.operator;
  const number = req.body.number;
  SimCard.create({ operator, number })
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => console.log(err));
});

// получаем объект по id для редактирования
app.get('/edit/:id', urlencodedParser, function (req, res) {
  const userid = req.params.id;
  SimCard.findAll({ where: { id: userid }, raw: true })
    .then((data) => {
      res.render('edit.hbs', { card: data[0] });
    })
    .catch((err) => console.log(err));
});

// обновление данных в БД
app.post('/edit', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);

  const operator = req.body.operator;
  const number = req.body.number;
  const userid = req.body.id;
  SimCard.update({ operator, number }, { where: { id: userid } })
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => console.log(err));
});

// Удаление данных
app.post('/delete/:id', function (req, res) {
  const userid = req.params.id;
  SimCard.destroy({ where: { id: userid } })
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => console.log(err));
});
