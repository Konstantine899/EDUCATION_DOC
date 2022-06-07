// server index.js
const Sequelize = require('sequelize');

const sequelize = new Sequelize('network', 'asu8', '123', {
  dialect: 'mysql',
  host: '10.178.4.52',
}); // создаю подключение и указываю название БД

const SimCard = require('./models/SimCard.js')(sequelize);

module.exports = {
  sequelize: sequelize,
  simCard: SimCard,
};
