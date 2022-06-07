// models SimCard.js
const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  return sequelize.define(
    'SimCard',
    {
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
    },
    {
      // создаются поля создания и обновления строк
      timestamp: false,
    }
  );
};
