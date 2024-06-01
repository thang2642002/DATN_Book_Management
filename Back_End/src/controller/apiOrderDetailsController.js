import apiOrderDetailService from "../service/apiOrderDetailsService";

const getAllOrderDetails = async (req, res) => {
  try {
    const dataOrderDetails = await apiOrderDetailService.getAllOrderDetails();
    if (dataOrderDetails) {
      return res.status(200).json({
        message: "Show all orderdetail is the success",
        data: dataOrderDetails,
      });
    } else {
      return res.status(200).json({
        message: "Show all orderdetail is the failde",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Show all orderdetail is the error",
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
        data: dataOrderDetails,
      });
    } else {
      return res.status(200).json({
        message: "Show orderDetail by id is the failed",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Show orderDetail by id is the error",
    });
  }
};

const createOrderDetails = async (req, res) => {
  const { quantity, unit_price, description, orderId, bookId } = req.body;
  try {
    if (!quantity || !unit_price || !description || !orderId || !bookId) {
      return res.status(200).json({
        message: "Input is the requid",
      });
    }
    const dataOrderDetails = await apiOrderDetailService.createOrderDetails(
      quantity,
      unit_price,
      description,
      orderId,
      bookId
    );
    if (dataOrderDetails) {
      return res.status(200).json({
        message: "Create OrderDeatails is the success",
        data: dataOrderDetails,
      });
    } else {
      return res.status(200).json({
        message: "Create OrderDeatails is the failed",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Create OrderDeatails is the error",
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
        data: orderDetails,
      });
    } else {
      return res.status(200).json({
        message: "Update orderDetail is the failed",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Update orderDetail is the error",
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
        data: orderDetail,
      });
    } else {
      return res.status(200).json({
        message: "Delete orderDetail is the fialed",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Delete orderDetail is the erorr",
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
