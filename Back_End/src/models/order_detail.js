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
      Order_Detail.belongsTo(models.Order_Book, { foreignKey: "orderId" });
      Order_Detail.belongsTo(models.Books, { foreignKey: "bookId" });
    }
  }
  //object relational mapping
  Order_Detail.init(
    {
      quantity: DataTypes.INTEGER,
      unit_price: DataTypes.INTEGER,
      description: DataTypes.STRING,
      orderId: DataTypes.INTEGER,
      bookId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order_Detail",
    }
  );
  return Order_Detail;
};
