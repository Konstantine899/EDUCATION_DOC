"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Post }) {
      // define association here
      // определите ассоциацию здесь
      this.hasMany(Post, { foreignKey: "userId", as: "posts" });
    }
    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  User.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false, //По умолчинию true т.е поле может быть пустым
        validate: {
          notNull: { msg: "У пользователя должно быть имя" },
          notEmpty: { msg: "Поле Имя не должно быть пустым" },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false, //По умолчинию true т.е поле может быть пустым
        validate: {
          notNull: { msg: "У пользователя должен быть email" },
          notEmpty: { msg: "Поле Email не должно быть пустым" },
          isEmail: { msg: "Укажите валидный адресс электронной почты" },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false, //По умолчинию true т.е поле может быть пустым
        validate: {
          notNull: { msg: "У пользователя должна быть указана роль" },
          notEmpty: { msg: "Поле Role не должно быть пустым" },
        },
      },
    },
    {
      sequelize,
      tableName: "users",
      modelName: "User",
    }
  );
  return User;
};
