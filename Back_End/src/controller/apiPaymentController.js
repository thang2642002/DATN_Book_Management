import apiPaymentService from "../service/apiPaymentService";

const getAllPayment = async (req, res) => {
  try {
    const dataPayment = await apiPaymentService.getAllPayment();
    if (dataPayment) {
      return res.status(200).json({
        message: "Show all payment is the success",
        errcode: 0,
        data: dataPayment,
      });
    } else {
      return res.status(200).json({
        message: "Show all payment is the faild",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Show all payment is the error",
      errcode: -1,
    });
  }
};

const getAllPaymentById = async (req, res) => {
  const id = req.params.id;

  try {
    const dataPayment = await apiPaymentService.getAllPaymentById(id);
    if (dataPayment) {
      return res.status(200).json({
        message: "Show payment by id is the success",
        errcode: 0,
        data: dataPayment,
      });
    } else {
      return res.status(200).json({
        message: "Show payment by id is the failed",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Show payment by id is the error",
      errcode: -1,
    });
  }
};

const createPayment = async (req, res) => {
  const { orderId, paymentDate, amount, paymnetMethod, transactionId } =
    req.body;
  try {
    if (
      !orderId ||
      !paymentDate ||
      !amount ||
      !paymnetMethod ||
      !transactionId
    ) {
      return res.status(200).json({
        message: "Input is the requid",
        errcode: 1,
      });
    }
    const payment = await apiPaymentService.createPayment(
      orderId,
      paymentDate,
      amount,
      paymnetMethod,
      transactionId
    );
    if (payment) {
      return res.status(200).json({
        message: "Ctrate Payment is the success",
        errcode: 0,
        data: payment,
      });
    } else {
      return res.status(200).json({
        message: "Ctrate Payment is the faild",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Ctrate Payment is the error",
      errcode: -1,
    });
  }
};

const updatePayment = async (req, res) => {
  const id = req.params.id;
  const dataPayment = req.body;

  try {
    if (!dataPayment) {
      return res.status(200).json({
        message: "Input is the requid",
        errcode: 1,
      });
    }
    const payment = await apiPaymentService.updatePayment(id, dataPayment);
    if (payment) {
      return res.status(200).json({
        message: "Update Payment is the success",
        errcode: 0,
        data: payment,
      });
    } else {
      return res.status(200).json({
        message: "Update Payment is the failed",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Update Payment is the error",
      errcode: -1,
    });
  }
};

const deletePayment = async (req, res) => {
  const id = req.params.id;
  try {
    const payment = await apiPaymentService.deletePayment(id);
    if (payment) {
      return res.status(200).json({
        message: "Delete Payment is the success",
        errcode: 0,
        data: payment,
      });
    } else {
      return res.status(200).json({
        message: "Delete Payment is the failed",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Delete Payment is the error",
      errcode: -1,
    });
  }
};

module.exports = {
  getAllPayment,
  getAllPaymentById,
  createPayment,
  updatePayment,
  deletePayment,
};
