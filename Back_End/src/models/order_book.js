"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order_Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order_Book.belongsTo(models.User);
      Order_Book.hasMany(models.Payment);
      Order_Book.hasMany(models.Order_Detail);
    }
  }
  //object relational mapping
  Order_Book.init(
    {
      order_date: DataTypes.STRING,
      totalPrice: DataTypes.INTEGER,
      description: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order_Book",
    }
  );
  return Order_Book;
};
