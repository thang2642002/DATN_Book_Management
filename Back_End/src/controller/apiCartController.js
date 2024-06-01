import apiCartService from "../service/apiCartService";

const getAllCart = async (req, res) => {
  try {
    const dataCart = await apiCartService.getAllCart();
    if (dataCart) {
      return res.status(200).json({
        message: "Show All Cart is the success",
        data: dataCart,
      });
    } else {
      return res.status(200).json({
        message: "Show All Cart is the failed",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Show All Cart is the error",
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
        data: dataCart,
      });
    } else {
      return res.status(200).json({
        message: "Show Cart by id is the failed",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Show Cart by id is the error",
    });
  }
};

const createCart = async (req, res) => {
  const { userId, createDate, quantity, bookIds } = req.body;
  try {
    if (!userId || !createDate || !quantity || !bookIds) {
      return res.status(400).json({
        message: "Input is required",
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
        data: dataCart,
      });
    } else {
      return res.status(400).json({
        message: "Create cart is the failed",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Create cart is the error",
    });
  }
};

const updateCart = async (req, res) => {
  const id = req.params.id;
  const { userId, createDate, quantity, bookIds } = req.body;

  try {
    const carts = await apiCartService.updateCart(id, {
      userId,
      createDate,
      quantity,
      bookIds,
    });
    if (carts) {
      return res.status(200).json({
        message: "Update cart is the success",
        data: carts,
      });
    } else {
      return res.status(400).json({
        message: "Update cart is the failed",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Update cart is the error",
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
        data: dataCart,
      });
    } else {
      return res.status(400).json({
        message: "Delete cart is the failed",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Delete cart is the error",
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
