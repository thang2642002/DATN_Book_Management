"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart_Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart_Item.belongsTo(models.Books, { foreignKey: "bookId" });
      Cart_Item.belongsTo(models.Carts, { foreignKey: "cartId" });
    }
  }
  //object relational mapping
  Cart_Item.init(
    {
      cartId: DataTypes.INTEGER,
      bookId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cart_Item",
    }
  );
  return Cart_Item;
};
