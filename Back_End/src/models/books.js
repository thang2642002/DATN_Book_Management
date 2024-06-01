"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    static associate(models) {
      Books.belongsToMany(models.Suppliers, { through: "Book_Suppliers" });
      Books.belongsTo(models.Author, {
        foreignKey: "authorId",
      });
      Books.belongsTo(models.Genres, { foreignKey: "genresId" });
      Books.hasMany(models.Transaction, { foreignKey: "bookId" });
      Books.hasMany(models.Order_Detail, { foreignKey: "bookId" });
      Books.hasMany(models.Review, { foreignKey: "bookId" });
      Books.hasMany(models.Cart_Item, { foreignKey: "bookId" });
      Books.belongsToMany(models.Carts, {
        through: models.Cart_Item,
        foreignKey: "bookId",
      });
    }
  }

  Books.init(
    {
      title: DataTypes.STRING,
      img_book: DataTypes.STRING,
      authorId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Authors",
          key: "id",
        },
      },
      genresId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      sales: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Books",
    }
  );

  return Books;
};
