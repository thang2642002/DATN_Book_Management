"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payment.belongsTo(models.Order_Book, { foreignKey: "orderId" });
      Payment.belongsTo(models.Transaction, { foreignKey: "transactionId" });
    }
  }
  //object relational mapping
  Payment.init(
    {
      orderId: DataTypes.INTEGER,
      paymentDate: DataTypes.STRING,
      amount: DataTypes.INTEGER,
      paymnetMethod: DataTypes.STRING,
      transactionId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Payment",
    }
  );
  return Payment;
};
