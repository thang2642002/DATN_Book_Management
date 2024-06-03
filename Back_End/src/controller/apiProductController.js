import apiProductService from "../service/apiProductService";

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
  const {
    title,
    img_book,
    authorId,
    genresId,
    price,
    quantity,
    sales,
    supplierIds,
  } = req.body;
  console.log(
    title,
    img_book,
    authorId,
    genresId,
    price,
    quantity,
    sales,
    supplierIds
  );

  try {
    if (
      !title ||
      !img_book ||
      !authorId ||
      !genresId ||
      !price ||
      !quantity ||
      !sales
    ) {
      return res.status(200).json({
        message: "Input is the required",
      });
    }

    const dataProduct = await apiProductService.createProduct(
      title,
      img_book,
      authorId,
      genresId,
      price,
      quantity,
      sales,
      supplierIds
    );
    console.log(dataProduct);
    if (dataProduct) {
      return res.status(200).json({
        message: "Create product is the success",
        data: dataProduct,
      });
    } else {
      return res.status(200).json({
        message: "Create product is the faidle",
        data: [],
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Create product is the error",
      data: [],
    });
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const dataUpdate = req.body;

  console.log("id: ", id);
  console.log("dataUpdate: ", dataUpdate);
  try {
    let updateProduct = await apiProductService.updateProduct(id, dataUpdate);
    console.log("dataUpdate: ", updateProduct);
    if (updateProduct) {
      return res.status(200).json({
        message: "Update Product was successful",
        data: updateProduct,
      });
    } else {
      return res.status(404).json({
        message: "Update Product failed: Product not found",
        data: [],
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while updating the product",
    });
  }
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  if (!productId) {
    return res.status(400).json({ message: "Product ID is required" });
  }

  try {
    const result = await apiProductService.removeProduct(productId);
    console.log(`Service result: `, result);
    if (result) {
      return res
        .status(200)
        .json({ message: "Product deleted successfully", data: result });
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error deleting Product:", error);
    return res.status(500).json({ message: "Delete Product Failed" });
  }
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getAllProductById,
};
