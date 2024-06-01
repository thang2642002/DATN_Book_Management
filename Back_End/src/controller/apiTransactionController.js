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
        data: newTransaction,
      });
    } else {
      res.status(201).json({
        message: "Transaction created faild",
        data: [],
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
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
        data: updatedTransaction,
      });
    } else {
      res.status(200).json({
        message: "Transaction updated faild",
        data: [],
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteTransaction = async (req, res) => {
  const transactionId = req.params.id;
  console.log("transactionId: ", transactionId);
  try {
    let transaction = await transactionService.deleteTransaction(transactionId);
    if (transaction) {
      res.status(200).json({
        message: "Transaction deleted successfully",
        data: transaction,
      });
    } else {
      res.status(200).json({ message: "Transaction deleted faild" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
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
        data: transaction,
      });
    } else {
      res.status(200).json({
        message: "Show Transaction is the faild",
        data: [],
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const getAllTransactions = async (req, res) => {
  try {
    const transactions = await transactionService.getAllTransactions();
    if (transactions) {
      res.status(200).json({
        message: "Show Transaction is the success",
        data: transactions,
      });
    } else {
      res
        .status(200)
        .json({ message: "Show Transaction is the faild", data: [] });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTransaction,
  updateTransaction,
  deleteTransaction,
  getTransactionById,
  getAllTransactions,
};
