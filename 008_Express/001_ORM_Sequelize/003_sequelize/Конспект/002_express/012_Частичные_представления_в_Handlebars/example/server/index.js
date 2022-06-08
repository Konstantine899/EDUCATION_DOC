const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials'); // настройка частичных предствлений

app.use('/contact', function (req, res) {
  res.render('contact', {
    title: 'Мои контакты',
    email: 'gavgav@mycorp.com',
    phone: '+1234567890',
  });
});

app.use('/', function (req, res) {
  res.render('home.hbs');
});

app.listen(5000);
