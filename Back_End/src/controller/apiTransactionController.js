import transactionService from "../service/apiTransactionService";

const createTransaction = async (req, res) => {
  const { transactionDate, transactionType, bookId, quantity, price } =
    req.body;
  try {
    if (
      !transactionDate ||
      !transactionType ||
      !bookId ||
      !quantity ||
      !price
    ) {
      res.status(200).json({
        message: "Input is the requid",
        errcode: 1,
      });
    }
    const newTransaction = await transactionService.createTransaction({
      transactionDate,
      transactionType,
      bookId,
      quantity,
      price,
    });
    if (newTransaction) {
      res.status(201).json({
        message: "Transaction created successfully",
        errcode: 0,
        data: newTransaction,
      });
    } else {
      res.status(201).json({
        message: "Transaction created faild",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message, errcode: -1 });
  }
};

const updateTransaction = async (req, res) => {
  const transactionId = req.params.id;
  const dataTransaction = req.body;
  try {
    const updatedTransaction = await transactionService.updateTransaction(
      transactionId,
      dataTransaction
    );
    if (updateTransaction) {
      res.status(200).json({
        message: "Transaction updated successfully",
        errcode: 0,
        data: updatedTransaction,
      });
    } else {
      res.status(200).json({
        message: "Transaction updated faild",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message, errcode: -1 });
  }
};

const deleteTransaction = async (req, res) => {
  const transactionId = req.params.id;

  try {
    const transaction = await transactionService.deleteTransaction(
      transactionId
    );

    if (transaction) {
      res.status(200).json({
        message: "Transaction deleted successfully",
        errcode: 0,
        data: transaction,
      });
    } else {
      res.status(404).json({
        message: "Transaction not found",
        errcode: 1,
      });
    }
  } catch (error) {
    console.error("Error in deleteTransaction controller:", error);
    res.status(500).json({
      message: "Failed to delete transaction",
      errcode: -1,
      error: error.message,
    });
  }
};

const getTransactionById = async (req, res) => {
  const transactionId = req.params.id;
  try {
    const transaction = await transactionService.getTransactionById(
      transactionId
    );
    if (transaction) {
      res.status(200).json({
        message: "Show Transaction is the success",
        errcode: 0,
        data: transaction,
      });
    } else {
      res.status(200).json({
        message: "Show Transaction is the faild",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message, errcode: -1 });
  }
};

const getAllTransactions = async (req, res) => {
  try {
    const transactions = await transactionService.getAllTransactions();
    if (transactions) {
      res.status(200).json({
        message: "Show Transaction is the success",
        errcode: 0,
        data: transactions,
      });
    } else {
      res.status(200).json({
        message: "Show Transaction is the faild",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message, errcode: 1 });
  }
};

module.exports = {
  createTransaction,
  updateTransaction,
  deleteTransaction,
  getTransactionById,
  getAllTransactions,
};
