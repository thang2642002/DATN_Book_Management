"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Books.belongsToMany(models.Suppliers, { through: "Book_Suppliers" });
      Books.belongsToMany(models.Author, { through: "Book_Authors" });
      Books.belongsTo(models.Genres);
      Books.hasMany(models.Transaction);
      Books.hasMany(models.Order_Detail);
      Books.hasMany(models.Review);
      Books.hasMany(models.Cart_Item);
    }
  }
  //object relational mapping
  Books.init(
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      genresId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Books",
    }
  );
  return Books;
};
