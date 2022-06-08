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

// Удаление таблицы
const sql = `DROP TABLE sim2 `;
connection.query(sql, function (err, results) {
  if (err) console.log(err);
  console.log(results);
});

// закрытие подключения
connection.end(function (err) {
  if (err) {
    return console.log('Ошибка: ' + err.message);
  } else {
    console.log('Подключение закрыто');
  }
});
