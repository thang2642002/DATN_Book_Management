import apiCartService from "../service/apiCartService";

const getAllCart = async (req, res) => {
  try {
    const dataCart = await apiCartService.getAllCart();
    if (dataCart) {
      return res.status(200).json({
        message: "Show All Cart is the success",
        errcode: 0,
        data: dataCart,
      });
    } else {
      return res.status(200).json({
        message: "Show All Cart is the failed",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Show All Cart is the error",
      errcode: -1,
    });
  }
};

const getAllCartById = async (req, res) => {
  const id = req.params.id;
  try {
    const dataCart = await apiCartService.getAllCartById(id);
    if (dataCart) {
      return res.status(200).json({
        message: "Show Cart by id is the success",
        errcode: 0,
        data: dataCart,
      });
    } else {
      return res.status(200).json({
        message: "Show Cart by id is the failed",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Show Cart by id is the error",
      errcode: -1,
    });
  }
};

const createCart = async (req, res) => {
  const { userId, createDate, quantity, bookIds } = req.body;
  console.log("userId: ", userId);
  console.log("createDate: ", createDate);
  console.log("quantity: ", quantity);
  console.log("bookIds: ", bookIds);
  try {
    if (!userId || !createDate || !quantity || !bookIds) {
      console.log("checkkkkkkkkkkkkkk");
      return res.status(400).json({
        message: "Input is required",
        errcode: 1,
      });
    }
    const dataCart = await apiCartService.createCart(
      userId,
      createDate,
      quantity,
      bookIds
    );
    if (dataCart) {
      return res.status(200).json({
        message: "Create cart is the success",
        errcode: 0,
        data: dataCart,
      });
    } else {
      return res.status(400).json({
        message: "Create cart is the failed",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Create cart is the error",
      errcode: -1,
    });
  }
};

const updateCart = async (req, res) => {
  const id = req.params.id;
  const { userId, createDate, quantity, bookId } = req.body;

  try {
    const carts = await apiCartService.updateCart(id, {
      userId,
      createDate,
      quantity,
      bookId,
    });
    if (carts) {
      return res.status(200).json({
        message: "Update cart is the success",
        errcode: 0,
        data: carts,
      });
    } else {
      return res.status(400).json({
        message: "Update cart is the failed",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Update cart is the error",
      errcode: -1,
    });
  }
};

const deleteCart = async (req, res) => {
  const id = req.params.id;
  try {
    const dataCart = await apiCartService.deleteCart(id);
    if (dataCart) {
      return res.status(200).json({
        message: "Delete cart is the success",
        errcode: 0,
        data: dataCart,
      });
    } else {
      return res.status(400).json({
        message: "Delete cart is the failed",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Delete cart is the error",
      errcode: -1,
    });
  }
};

module.exports = {
  getAllCart,
  getAllCartById,
  createCart,
  updateCart,
  deleteCart,
};
