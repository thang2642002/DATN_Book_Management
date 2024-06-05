import axios from "../utils/axiosCustommize";

const getListTransaction = () => {
  return axios.get("/api/transaction/get-all-transaction");
};

const createTransaction = (
  transactionDate,
  transactionType,
  bookId,
  quantity,
  price
) => {
  const data = { transactionDate, transactionType, bookId, quantity, price };
  return axios.post("/api/transaction/create-transaction", data);
};

export { getListTransaction, createTransaction };
