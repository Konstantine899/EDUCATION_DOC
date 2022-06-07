const mysql = require('mysql2');

const pool = mysql
  .createPool({
    connectionLimit: 5,
    host: '10.178.4.52',
    port: '3306',
    user: 'asu8',
    database: 'network',
    password: '123',
  })
  .promise();

pool
  .execute(`UPDATE sim2 SET operator="A1"   WHERE  number="+375298918970"   `) // изменение объектов
  .then((err, result) => {
    console.log(result);
    return pool.execute(`SELECT * FROM sim2`); // Получение объектов
  })
  .then((result) => {
    console.log(result[0]);
    pool.end;
  })
  .catch(function (err) {
    console.log(err.message);
  });
