const Sequelize = require("sequelize");
const { DataTypes, Op, STRING } = require("sequelize");
const { log } = require("nodemon/lib/utils");

const sequelize = new Sequelize("network", "asu8", "123", {
  host: "10.178.4.52",
  dialect: "mysql",
});

//Модель покупателя
const Customer = sequelize.define(
  "customer",
  {
    customerName: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

//Модель продуктов
const Product = sequelize.define(
  "product",
  {
    productName: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

//модель объеденения товаров и клиентов
const customerProduct = sequelize.define(
  "customerproduct",
  {
    customerproductId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  { timestamps: false }
);

//отношение многие ко многим
Customer.belongsToMany(Product, {
  through: customerProduct, //передаю название соеденительной модели
});
Product.belongsToMany(Customer, {
  through: customerProduct, //передаю название соеденительной модели
});

let customer, product;

//Синхронизация с БД
sequelize
  .sync({ alter: true })
  .then(() => {
    return Customer.destroy({ where: { customerName: "Екатерина" } });
  })
  .then((data) => {
    console.log(data);
  })

  .catch((error) => {
    console.log(error);
  });
