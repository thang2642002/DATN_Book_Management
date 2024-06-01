import db from "../models/index";

const getAllOrderDetails = async () => {
  try {
    const orderDetails = await db.Order_Detail.findAll();
    if (!orderDetails) {
      return null;
    }
    return orderDetails;
  } catch (error) {
    console.log(error);
  }
};

const getAllOrderDetailsById = async (id) => {
  try {
    const orderDetails = await db.Order_Detail.findByPk(id);
    if (!orderDetails) {
      return null;
    }
    return orderDetails;
  } catch (error) {
    console.log(error);
  }
};

const createOrderDetails = async (
  quantity,
  unit_price,
  description,
  orderId,
  bookId
) => {
  try {
    const orderDetails = await db.Order_Detail.create({
      quantity,
      unit_price,
      description,
      orderId,
      bookId,
    });
    if (!orderDetails) {
      return null;
    }
    return orderDetails;
  } catch (error) {
    console.log(error);
  }
};

const updateOrderDetails = async (id, dataOrderDetails) => {
  try {
    const orderDetails = await db.Order_Detail.findByPk(id);
    if (!orderDetails) {
      return null;
    }
    await orderDetails.update(dataOrderDetails);
    return orderDetails;
  } catch (error) {
    console.log(error);
  }
};

const deleteOrderDetails = async (id) => {
  try {
    const orderDetail = await db.Order_Detail.findByPk(id);
    if (!orderDetail) {
      return null;
    }
    await orderDetail.destroy();
    return orderDetail;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllOrderDetails,
  getAllOrderDetailsById,
  createOrderDetails,
  updateOrderDetails,
  deleteOrderDetails,
};
