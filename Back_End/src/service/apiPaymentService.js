import db from "../models/index";

const getAllPayment = async () => {
  try {
    const payments = await db.Payment.findAll({
      include: [{ model: db.Transaction }, { model: db.Order_Book }],
    });
    return payments;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getAllPaymentById = async (id) => {
  try {
    const payment = await db.Payment.findByPk(id, {
      include: [{ model: db.Transaction }, { model: db.Order_Book }],
    });
    if (!payment) {
      return null;
    }
    return payment;
  } catch (error) {
    console.log(error);
  }
};

const createPayment = async (
  orderId,
  paymentDate,
  amount,
  paymnetMethod,
  transactionId
) => {
  try {
    const payment = await db.Payment.create({
      orderId,
      paymentDate,
      amount,
      paymnetMethod,
      transactionId,
    });
    console.log(payment);
    if (!payment) {
      return null;
    }
    return payment;
  } catch (error) {
    console.log(error);
  }
};

const updatePayment = async (id, dataPayment) => {
  try {
    const payment = await db.Payment.findByPk(id);
    if (!payment) {
      return null;
    }
    await payment.update(dataPayment);
    return payment;
  } catch (error) {
    console.log(error);
  }
};

const deletePayment = async (id) => {
  try {
    const payment = await db.Payment.findByPk(id);
    if (!payment) {
      return null;
    }
    await payment.destroy();
    return payment;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllPayment,
  getAllPaymentById,
  createPayment,
  updatePayment,
  deletePayment,
};
