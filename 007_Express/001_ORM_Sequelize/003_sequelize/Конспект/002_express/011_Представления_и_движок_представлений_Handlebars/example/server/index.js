const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.set('views', '../client'); // установка пути к представлениям

app.use('/contact', function (request, response) {
  response.render('index');
});

app.listen(5000);
