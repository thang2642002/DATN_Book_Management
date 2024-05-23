import db from "../models/index";

const getAllProducts = async () => {
  try {
    const listProduct = await db.Books.findAll({
      include: [
        {
          model: db.Genres,
        },
        {
          model: db.Author,
        },
      ],
    });
    if (!listProduct) {
      return null;
    }
    return listProduct;
  } catch (error) {
    console.log(error);
  }
};

const getAllProductById = async (id) => {
  try {
    let productById = await db.Books.findOne({
      where: {
        id: id,
      },
      include: db.Genres,
      include: db.Author,
    });
    if (!productById) {
      return null;
    }
    return productById;
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async (
  title,
  img_book,
  authorId,
  genresId,
  price,
  quantity,
  sales
) => {
  try {
    const genres = await db.Genres.findByPk(genresId);
    if (!genres) {
      return false;
    }

    let dataProduct = await db.Books.create({
      title,
      img_book,
      authorId,
      genresId,
      price,
      quantity,
      sales,
    });
    return dataProduct;
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (id, dataUpdate) => {
  try {
    const product = await db.Books.findByPk(id);
    console.log("check id product: ", product);
    if (!product) {
      return null;
    }

    await product.update(dataUpdate);
    console.log("checkUpdate", dataUpdate);
    return product;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update product");
  }
};

const removeProduct = async (productId) => {
  try {
    const product = await db.Books.findByPk(productId);
    if (!product) {
      return false;
    }
    await product.destroy();
    return true;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw new Error("Delete Product Failed");
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  removeProduct,
  updateProduct,
  getAllProductById,
};
