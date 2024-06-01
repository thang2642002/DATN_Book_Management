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
  supplierIds
) => {
  let transaction;
  try {
    transaction = await db.sequelize.transaction();
    const genres = await db.Genres.findByPk(genresId);
    if (!genres) {
      return false;
    }

    let dataProduct = await db.Books.create(
      {
        title,
        img_book,
        authorId,
        genresId,
        price,
        quantity,
        sales,
      },
      { transaction }
    );
    if (supplierIds && supplierIds.length > 0) {
      await dataProduct.addSuppliers(supplierIds, { transaction });
    }
    await transaction.commit();
    return dataProduct;
  } catch (error) {
    if (transaction) await transaction.rollback();
    console.error(error);
    throw error;
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

    // Kiểm tra nếu có supplierIds được cung cấp trong dữ liệu cập nhật
    if (dataUpdate.supplierIds && Array.isArray(dataUpdate.supplierIds)) {
      // Xóa tất cả các mối quan hệ cũ với các nhà cung cấp
      await product.removeSuppliers();

      // Thêm các mối quan hệ mới với các nhà cung cấp được cung cấp
      await product.addSuppliers(dataUpdate.supplierIds);
    }

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
    await db.Book_Suppliers.destroy({ where: { bookId: productId } });
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
