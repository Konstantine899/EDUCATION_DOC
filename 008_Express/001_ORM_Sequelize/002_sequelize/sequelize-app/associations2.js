const Sequelize = require("sequelize");
const { DataTypes, Op } = require("sequelize");

const sequelize = new Sequelize("network", "asu8", "123", {
  host: "10.178.4.52",
  dialect: "mysql",
});

//Модель пользователей
const User = sequelize.define(
  "user",
  { username: DataTypes.STRING, password: DataTypes.STRING },
  { timestamps: false }
);

//Модель сообщений
const Post = sequelize.define(
  "post",
  {
    message: DataTypes.STRING,
  },
  {
    timestamps: false,
  }
);
// создается внешний ключ и помещается в дочернюю  таблицу posts
User.hasMany(Post, { onDelete: "CASCADE" }); // Пользователь имеет много сообщений
//Указываю обратную связь Исходная таблица posts принадлежит дочерней таблице users
Post.belongsTo(User, { onDelete: "CASCADE" }); //Сообщения принадлежат одному пользователю

let user, posts;

//Синхронезирую модель и БД
sequelize
  .sync({ alter: true })
  .then(() => {
    return User.findOne();
  })
  .then((data) => {
    user = data;
    return Post.findOne();
  })
  .then((data) => {
    posts = data;
    posts.setUser(user); //Связываю пользователяя и сообщение Внешним ключом
  })

  .catch((error) => {
    console.log(error);
  });
