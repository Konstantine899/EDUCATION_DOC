const Sequelize = require("sequelize");
const { DataTypes, QueryTypes, Op } = Sequelize;
const bcrypt = require("bcrypt");
const zlib = require("zlib");

// DB=network
// USER=asu8
// PASSWORD=123
// DIALECT=mysql
// HOST=10.178.4.52

const sequelize = new Sequelize("network", "asu8", "123", {
  host: "10.178.4.52",
  dialect: "mysql",
}); // создаю экземпляр класса

sequelize.sync({ alter: true }); //Будет синхронизировать каждую таблицу по отдельности не пересобирая все таблицы

const User = sequelize.define(
  "user",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true, // Первичный ключ
      autoIncrement: true, //Автоматическое приращение
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      // get() {
      //   const rawValue = this.getDataValue("username"); //Получаю не обработанное значение от текущего пользователя
      //   return rawValue.toUpperCase();
      // },
    },
    password: {
      type: DataTypes.STRING,
      // set(value) {
      //   const salt = bcrypt.genSaltSync(12);
      //   const hash = bcrypt.hashSync(value, salt); // мфдгу переданное значение salt захэшированный пароль
      //   this.setDataValue("password", hash);
      // },
    },
    age: {
      type: DataTypes.INTEGER,
      defaultValue: 21,
      validate: {
        isNumeric: {
          msg: "Вы должны ввести число для возраста",
        },
      },
    },
    description: {
      type: DataTypes.STRING,
      // set(value) {
      //   const compressed = zlib.deflateSync(value).toString("base64");
      //   this.setDataValue("description", compressed);
      // },
      // get() {
      //   const value = this.getDataValue("description");
      //   const uncompressed = zlib.inflateSync(Buffer.from(value, "base64")); //расспаковываю
      //   return uncompressed.toString(); // привожу buffer object к строке
      // },
    },
    aboutUser: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.username} ${this.description}`;
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true, // ограничение, поле email является уникальным.
      allowNull: true, // обязательно устанавливаю в true для того что бы при проверке перейти к validate
      validate: {
        myEmailValidator(value) {
          if (value === null) {
            throw new Error("Пожалуйста введите email");
          }
        },
      },
    },
  },

  {
    freezeTableName: true, // указываю что бы имя нашей модели совпадало с именем нашей таблицы
    //Провожу валидацию на уровне модели
    validate: {
      usernamePassMatch() {
        if (this.username === this.password) {
          throw new Error(`Имя пользователя и пароль не должны совпадать!!!`);
        } else {
          console.log(`Регистрация прошла успешно`);
        }
      },
    },
  }
); // Определяю модель пользователей

function myFunction() {
  console.log("запуск sql");
}

User.sync({ alter: true })
  .then(() => {
    return sequelize.query(`SELECT * FROM user LIMIT 2`, {
      logging: myFunction,
    });
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
