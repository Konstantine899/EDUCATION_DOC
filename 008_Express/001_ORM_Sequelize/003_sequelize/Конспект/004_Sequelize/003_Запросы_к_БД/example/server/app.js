const Sequelize = require('sequelize');
const sequelize = new Sequelize('network', 'asu8', '123', {
  dialect: 'mysql',
  host: '10.178.4.52',
});

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

// Удаление
SimCard.destroy({
  where: {
    number: '+375295962917',
  },
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
