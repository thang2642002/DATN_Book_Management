"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order_Detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  //object relational mapping
  Order_Detail.init(
    {
      quantity: DataTypes.STRING,
      unit_price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order_Detail",
    }
  );
  return Order_Detail;
};
