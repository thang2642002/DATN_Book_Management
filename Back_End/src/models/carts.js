"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Carts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Carts.belongsTo(models.User, { foreignKey: "userId" });
      Carts.hasMany(models.Cart_Item, { foreignKey: "cartId" });
      Carts.belongsToMany(models.Books, {
        through: models.Cart_Item,
        foreignKey: "cartId",
      });
    }
  }
  //object relational mapping
  Carts.init(
    {
      userId: DataTypes.INTEGER,
      createDate: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Carts",
    }
  );
  return Carts;
};
