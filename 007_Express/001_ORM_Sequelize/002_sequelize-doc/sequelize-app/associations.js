//associations.js
const Sequelize = require("sequelize");
const { DataTypes, Op } = require("sequelize");

const sequelize = new Sequelize("network", "asu8", "123", {
  host: "10.178.4.52",
  dialect: "mysql",
});

//Таблица стран
const Country = sequelize.define(
  "country",
  {
    countryName: { type: DataTypes.STRING, unique: true },
  },
  {
    timestamps: false, //убираю временные метки. Так же в этом третьем параметре функции define могу задать чтоное имя таблицы tableName
  }
);

//Таблица столиц
const Capital = sequelize.define(
  "capital",
  {
    capitalName: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    timestamps: false, //убираю временные метки. Так же в этом третьем параметре функции define могу задать чтоное имя таблицы tableName
  }
);

//Определяю ассоциации
//Все методы one-to-one, many-to-one и many-to-may принимают объект параметров в качестве второго параметра
Country.hasOne(Capital, { onUpdate: "CASCADE" });
Capital.belongsTo(Country, { onDelete: "CASCADE" });

let country, capital;

//
sequelize
  .sync({ alter: true })

  .then(() => {
    //работаем с нашими обновленными таблицами
    return Country.findOne({ where: { countryName: "Франция" } });
  })
  .then((data) => {
    country = data;
    return Capital.findOne({ where: { capitalName: "Париж" } });
  })
  .then((data) => {
    console.log(data);
    capital = data;
    return capital.setCountry(country);
  })
  .then((data) => {
    console.log(data);
  })

  .catch((error) => {
    console.log(error);
  });
