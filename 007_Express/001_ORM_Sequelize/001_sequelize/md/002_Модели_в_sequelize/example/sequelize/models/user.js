"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false, //По умолчинию true т.е поле может быть пустым
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false, //По умолчинию true т.е поле может быть пустым
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false, //По умолчинию true т.е поле может быть пустым
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
