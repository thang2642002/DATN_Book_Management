import apiOrderDetailService from "../service/apiOrderDetailsService";

const getAllOrderDetails = async (req, res) => {
  try {
    const dataOrderDetails = await apiOrderDetailService.getAllOrderDetails();
    if (dataOrderDetails) {
      return res.status(200).json({
        message: "Show all orderdetail is the success",
        errcode: 0,
        data: dataOrderDetails,
      });
    } else {
      return res.status(200).json({
        message: "Show all orderdetail is the failde",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Show all orderdetail is the error",
      errcode: -1,
    });
  }
};

const getAllOrderDetailsById = async (req, res) => {
  const id = req.params.id;
  try {
    const dataOrderDetails = await apiOrderDetailService.getAllOrderDetailsById(
      id
    );
    if (dataOrderDetails) {
      return res.status(200).json({
        message: "Show orderDetail by id is the success",
        errcode: 0,
        data: dataOrderDetails,
      });
    } else {
      return res.status(200).json({
        message: "Show orderDetail by id is the failed",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Show orderDetail by id is the error",
      errcode: 1,
    });
  }
};

const createOrderDetails = async (req, res) => {
  const { quantity, unit_price, orderId, bookId, userId } = req.body;
  try {
    if (!quantity || !unit_price || !orderId || !bookId || !userId) {
      return res.status(200).json({
        message: "Input is the requid",
        errcode: 1,
      });
    }
    const dataOrderDetails = await apiOrderDetailService.createOrderDetails(
      quantity,
      unit_price,
      orderId,
      bookId,
      userId
    );
    if (dataOrderDetails) {
      return res.status(200).json({
        message: "Create OrderDeatails is the success",
        errcode: 0,
        data: dataOrderDetails,
      });
    } else {
      return res.status(200).json({
        message: "Create OrderDeatails is the failed",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Create OrderDeatails is the error",
      errcode: 1,
    });
  }
};

const updateOrderDetails = async (req, res) => {
  const id = req.params.id;
  const dataOrderDetails = req.body;

  try {
    const orderDetails = await apiOrderDetailService.updateOrderDetails(
      id,
      dataOrderDetails
    );
    if (orderDetails) {
      return res.status(200).json({
        message: "Update orderDetail is the success",
        errcode: 0,
        data: orderDetails,
      });
    } else {
      return res.status(200).json({
        message: "Update orderDetail is the failed",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Update orderDetail is the error",
      errcode: -1,
    });
  }
};

const deleteOrderDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const orderDetail = await apiOrderDetailService.deleteOrderDetails(id);
    if (orderDetail) {
      return res.status(200).json({
        message: "Delete orderDetail is the success",
        errcode: 0,
        data: orderDetail,
      });
    } else {
      return res.status(200).json({
        message: "Delete orderDetail is the fialed",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Delete orderDetail is the erorr",
      errcode: -1,
    });
  }
};

module.exports = {
  getAllOrderDetails,
  getAllOrderDetailsById,
  createOrderDetails,
  updateOrderDetails,
  deleteOrderDetails,
};
