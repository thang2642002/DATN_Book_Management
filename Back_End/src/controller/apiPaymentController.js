import apiPaymentService from "../service/apiPaymentService";

const getAllPayment = async (req, res) => {
  try {
    const dataPayment = await apiPaymentService.getAllPayment();
    if (dataPayment) {
      return res.status(200).json({
        message: "Show all payment is the success",
        data: dataPayment,
      });
    } else {
      return res.status(200).json({
        message: "Show all payment is the faild",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Show all payment is the error",
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
        data: dataPayment,
      });
    } else {
      return res.status(200).json({
        message: "Show payment by id is the failed",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Show payment by id is the error",
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
        data: payment,
      });
    } else {
      return res.status(200).json({
        message: "Ctrate Payment is the faild",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Ctrate Payment is the error",
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
      });
    }
    const payment = await apiPaymentService.updatePayment(id, dataPayment);
    if (payment) {
      return res.status(200).json({
        message: "Update Payment is the success",
        data: payment,
      });
    } else {
      return res.status(200).json({
        message: "Update Payment is the failed",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Update Payment is the error",
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
        data: payment,
      });
    } else {
      return res.status(200).json({
        message: "Delete Payment is the failed",
        data: [],
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Delete Payment is the error",
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
