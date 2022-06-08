// db.js
const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
  process.env.DB_NAME, // имя БД
  process.env.DB_USER, // имя пользователя
  process.env.DB_PASSWORD, // пароль
  {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
);
