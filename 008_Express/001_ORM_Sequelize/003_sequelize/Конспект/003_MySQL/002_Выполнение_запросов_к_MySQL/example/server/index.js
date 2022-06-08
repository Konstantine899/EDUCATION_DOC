const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '10.178.4.52',
  port: '3306',
  user: 'asu8',
  database: 'network',
  password: '123',
});

// тестирование подключения
connection.connect(function (err) {
  if (err) {
    return console.error('Ошибка: ' + err.message);
  } else {
    console.log('Подключение к серверу MySQL успешно установлено');
  }
});

const simData = ['A1', '+375298918971'];
const sql = 'INSERT INTO sim(operator, number) VALUES(?,?)';

connection.query(sql, simData, function (err, results) {
  if (err) console.log(err);
  else console.log('Данные добавлены');
});

// закрытие подключения

connection.end(function (err) {
  if (err) {
    return console.log('Ошибка: ' + err.message);
  } else {
    console.log('Подключение закрыто');
  }
});
