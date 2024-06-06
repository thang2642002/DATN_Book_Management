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

const deleteTransaction = (id) => {
  return axios.delete(`/api/transaction/delete-transaction/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    // data: { otherData: value }, // Optional data
  });
};

export { getListTransaction, createTransaction, deleteTransaction };
