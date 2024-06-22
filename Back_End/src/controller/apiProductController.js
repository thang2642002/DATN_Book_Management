import apiProductService from "../service/apiProductService";

const getPaginatedProduct = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  const genresId = parseInt(req.query.genresId) || 0;

  console.log("page", page);
  console.log("pageSize", pageSize);
  try {
    const { totalItems, totalPages, data } =
      await apiProductService.fetchPaginatedProduct(page, pageSize, genresId);
    console.log("totalItems, totalPages, data", totalItems, totalPages, data);
    res.status(200).json({
      message: "PaginatedProduct success",
      errcode: 0,
      data: data,
      totalItems: totalItems,
      totalPages: totalPages,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      message: "PaginatedProduct error",
      errcode: -1,
    });
  }
};

const getNameProduct = async (req, res) => {
  const productName = req.params.productName;
  console.log("productName", productName);
  if (!productName) {
    return res.status(404).json({
      message: "Find name product is the faild",
      errcode: 1,
    });
  }

  try {
    const dataNameProduct = await apiProductService.findNameProduct(
      productName
    );
    if (dataNameProduct) {
      return res.status(200).json({
        message: "Find name product is the success",
        errcode: 0,
        data: dataNameProduct,
      });
    } else {
      return res.status(404).json({
        message: "Find name product is the faild",
        errcode: 1,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Find name product is the error",
      errcode: -1,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    let listProduct = await apiProductService.getAllProducts();
    if (listProduct) {
      return res.status(200).json({
        message: "Show List Producut is the success",
        errcode: 0,
        data: listProduct,
      });
    } else {
      return res.status(200).json({
        message: "Show List Producut is the falied",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    return res.status(200).json({
      message: "Show List Producut is the error",
      errcode: -1,
      data: [],
    });
  }
};

const getAllProductById = async (req, res) => {
  const id = req.params.id;

  try {
    let productById = await apiProductService.getAllProductById(id);
    if (productById) {
      return res.status(200).json({
        message: "Get product by id is the success",
        data: productById,
      });
    } else {
      return res.status(200).json({
        message: "Get product by id is the faild",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      message: "Get product by id is the error",
    });
  }
};

const createProduct = async (req, res) => {
  const img_book = req.file;
  const { title, authorId, genresId, price, quantity, sales, supplierId } =
    req.body;

  try {
    if (
      !title ||
      !img_book ||
      !authorId ||
      !genresId ||
      !price ||
      !quantity ||
      !sales ||
      !supplierId
    ) {
      return res.status(400).json({
        message: "Missing required fields",
        errcode: 1,
      });
    }

    const dataProduct = await apiProductService.createProduct(
      title,
      img_book ? img_book.path : undefined,
      authorId,
      genresId,
      price,
      quantity,
      sales,
      supplierId
    );

    console.log("img_book.path", img_book.path);

    if (dataProduct) {
      return res.status(200).json({
        message: "Create product successful",
        errcode: 0,
        data: dataProduct,
      });
    } else {
      if (img_book) cloudinary.uploader.destroy(avatar.filename);
      return res.status(500).json({
        message: "Failed to create product",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.error("Error creating product:", error);
    return res.status(500).json({
      message: "Failed to create product",
      errcode: -1,
    });
  }
};

const updateProduct = async (req, res) => {
  const img_book = req.file;
  const { title, authorId, genresId, price, quantity, sales, supplierId } =
    req.body;
  const productId = req.params.id;

  try {
    const dataUpdate = {
      title,
      authorId,
      genresId,
      price,
      quantity,
      sales,
      supplierId,
    };

    if (img_book) {
      dataUpdate.img_book = img_book.path;
    }

    const updatedProduct = await apiProductService.updateProduct(
      productId,
      dataUpdate
    );

    if (updatedProduct) {
      return res.status(200).json({
        message: "Update product successful",
        errcode: 0,
        data: updatedProduct,
      });
    } else {
      return res.status(404).json({
        message: "Product not found",
        errcode: 1,
      });
    }
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({
      message: "Failed to update product",
      errcode: -1,
    });
  }
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  if (!productId) {
    return res
      .status(400)
      .json({ message: "Product ID is required", errcode: 1 });
  }

  try {
    const result = await apiProductService.removeProduct(productId);
    console.log(`Service result: `, result);
    if (result) {
      return res.status(200).json({
        message: "Product deleted successfully",
        data: result,
        errcode: 0,
      });
    } else {
      return res.status(404).json({ message: "Product not found", errcode: 1 });
    }
  } catch (error) {
    console.error("Error deleting Product:", error);
    return res
      .status(500)
      .json({ message: "Delete Product Failed", errcode: -1 });
  }
};

const recommendAuthorsAndGenres = async (req, res) => {
  const { bookId } = req.params;
  console.log(bookId);
  try {
    const recommendations = await apiProductService.recommendByGenren(bookId);
    if (recommendAuthorsAndGenres) {
      return res.status(200).json({
        message: " Recommendations product successfully",
        data: recommendations,
        errcode: 0,
      });
    } else {
      return res.status(404).json({
        message: "Recommendations product not found",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Recommendations product erorr", errcode: -1 });
  }
};

const getByPriceProduct = async (req, res) => {
  const { minPrice, maxPrice } = req.query;
  try {
    const dataPrice = await apiProductService.getByPriceProduct(
      minPrice,
      maxPrice
    );
    if (dataPrice) {
      res.status(200).json({
        message: "Show all price product success",
        errcode: 0,
        data: dataPrice,
      });
    } else {
      res.status(200).json({
        message: "Show all price product faild",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    res.status(200).json({
      message: "Show all price product error",
      errcode: -1,
    });
  }
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getAllProductById,
  recommendAuthorsAndGenres,
  getPaginatedProduct,
  getNameProduct,
  getByPriceProduct,
};
