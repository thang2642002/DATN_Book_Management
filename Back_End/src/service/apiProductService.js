import db from "../models/index";
const { Op } = require("sequelize");

const fetchPaginatedProduct = async (page, pageSize) => {
  try {
    const totalProducts = await db.Books.count();
    const listProducts = await db.Books.findAll({
      limit: pageSize,
      offset: (page - 1) * pageSize,
    });
    const totalPages = Math.ceil(totalProducts / pageSize);
    return {
      totalItems: totalProducts,
      totalPages: totalPages,
      data: listProducts,
    };
  } catch (error) {
    console.error("Error fetching paginated products:", error);
    throw error;
  }
};
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
        { model: db.Suppliers },
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
      include: [
        {
          model: db.Genres,
        },
        {
          model: db.Author,
        },
        { model: db.Suppliers },
      ],
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
  sales,
  supplierId
) => {
  try {
    const genres = await db.Genres.findByPk(genresId);
    if (!genres) {
      throw new Error(`Genres with ID ${genresId} not found`);
    }

    console.log("img_book", img_book);

    let dataProduct = await db.Books.create({
      title,
      img_book,
      authorId,
      genresId,
      price,
      quantity,
      sales,
      supplierId,
    });

    return dataProduct;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

const updateProduct = async (id, dataUpdate) => {
  try {
    const product = await db.Books.findByPk(id);
    if (!product) {
      return null;
    }

    await product.update(dataUpdate);

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

const recommendByGenren = async (bookId) => {
  try {
    const originalBook = await db.Books.findByPk(bookId, {
      include: [
        {
          model: db.Genres,
          attributes: ["genres_name"],
        },
        {
          model: db.Author,
          attributes: ["author_name"],
        },
      ],
    });

    if (!originalBook) {
      throw new Error(`Không tìm thấy cuốn sách với ID ${bookId}`);
    }

    const recommendedBooks = await db.Books.findAll({
      where: {
        genresId: originalBook.genresId,
        id: { [Op.ne]: bookId }, // Loại trừ cuốn sách gốc
      },
      include: [
        { model: db.Author, attributes: ["author_name"] },
        { model: db.Genres, attributes: ["genres_name"] },
      ],
      limit: 10,
    });

    return recommendedBooks;
  } catch (error) {
    console.error("Lỗi khi đề xuất sách theo thể loại:", error);
    throw new Error("Không thể đề xuất sách theo thể loại.");
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  removeProduct,
  updateProduct,
  getAllProductById,
  recommendByGenren,
  fetchPaginatedProduct,
};
