import db from "../models/index";

const createTransaction = async ({
  transactionDate,
  transactionType,
  bookId,
  quantity,
  price,
}) => {
  try {
    const newTransaction = await db.Transaction.create({
      transactionDate,
      transactionType,
      bookId,
      quantity,
      price,
    });
    if (!newTransaction) {
      return null;
    }
    return newTransaction;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create transaction");
  }
};

const updateTransaction = async (transactionId, dataTransaction) => {
  try {
    const transaction = await db.Transaction.findByPk(transactionId);
    if (!transaction) {
      return null;
    }
    await transaction.update(dataTransaction);
    return transaction;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update transaction");
  }
};

const deleteTransaction = async (id) => {
  try {
    const transaction = await db.Transaction.findOne({
      where: { id: id },
    });

    if (!transaction) {
      return null;
    }

    await transaction.destroy();
    return transaction;
  } catch (error) {
    console.error("Error in deleteTransaction service:", error);
    throw new Error("Failed to delete transaction");
  }
};

const getTransactionById = async (transactionId) => {
  try {
    const transaction = await db.Transaction.findByPk(transactionId, {
      include: [
        {
          model: db.Books,
        },
      ],
    });
    if (!transaction) {
      return null;
    }
    return transaction;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch transaction");
  }
};

const getAllTransactions = async () => {
  try {
    const transactions = await db.Transaction.findAll({
      include: [
        {
          model: db.Books,
        },
      ],
    });
    return transactions;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch transactions");
  }
};

module.exports = {
  createTransaction,
  updateTransaction,
  deleteTransaction,
  getTransactionById,
  getAllTransactions,
};
