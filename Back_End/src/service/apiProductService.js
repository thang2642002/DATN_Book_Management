import db from "../models/index";
const { Op } = require("sequelize");

const fetchPaginatedProduct = async (page, pageSize, genresId) => {
  try {
    const totalProducts = await db.Books.count();
    let listProducts;
    if (genresId !== 0) {
      listProducts = await db.Books.findAll({
        where: {
          genresId: genresId,
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
        limit: pageSize,
        offset: (page - 1) * pageSize,
      });
    } else {
      listProducts = await db.Books.findAll({
        include: [
          {
            model: db.Genres,
          },
          {
            model: db.Author,
          },
          { model: db.Suppliers },
        ],
        limit: pageSize,
        offset: (page - 1) * pageSize,
      });
    }
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

const findNameProduct = async (productName) => {
  try {
    const dataNameProduct = await db.Books.findAll({
      where: {
        title: {
          [Op.like]: `%${productName}%`,
        },
      },
    });

    console.log("dataNameProduct11111", dataNameProduct);

    if (!dataNameProduct) {
      return null;
    }
    return dataNameProduct;
  } catch (error) {
    console.log(error);
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

const getByPriceProduct = async (minPrice, maxPrice) => {
  try {
    let whereCondition = {};
    if (minPrice && maxPrice) {
      whereCondition = {
        price: {
          [Op.between]: [minPrice, maxPrice],
        },
      };
    } else if (minPrice) {
      whereCondition = {
        price: {
          [Op.gte]: minPrice,
        },
      };
    } else if (maxPrice) {
      whereCondition = {
        price: {
          [Op.lte]: maxPrice,
        },
      };
    }

    const dataPrice = await db.Books.findAll({
      where: whereCondition,
      order: [["price", "ASC"]],
    });

    console.log("dataPrice", dataPrice);

    if (!dataPrice || dataPrice.length === 0) {
      return null;
    }
    return dataPrice;
  } catch (error) {
    console.log(error);
    throw error;
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
  findNameProduct,
  getByPriceProduct,
};
