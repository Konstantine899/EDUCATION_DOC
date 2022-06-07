const express = require('express');
const expressHbs = require('express-handlebars');
const hbs = require('hbs');
const app = express();

// устанавливаем настройки для файлов layout
app.engine(
  'hbs',
  expressHbs({
    layoutsDir: 'views/layouts',
    defaultLayout: 'layout',
    extname: 'hbs',
  })
);

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use('/contact', function (req, res) {
  res.render('contact', {
    title: 'Мои контакты',
    email: 'kostay375298918971@gmail.com',
    phone: '+375298918971',
  });
});

app.use('/', function (req, res) {
  res.render('home.hbs');
});

app.listen(5000);
