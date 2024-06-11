import axios from "../utils/axiosCustommize";
const getListPayment = () => {
  return axios.get("/api/payment/get-all-payment");
};

const createPayment = (
  orderId,
  paymentDate,
  amount,
  paymentMethod,
  transactionId
) => {
  const data = {
    orderId,
    paymentDate,
    amount,
    paymnetMethod: paymentMethod,
    transactionId,
  };
  return axios.post("/api/payment/craete-payment", data);
};

const updatePayment = (id, dataPayment) => {
  return axios.put(`/api/payment/update-payment/${id}`, dataPayment);
};

const deletePayment = (id) => {
  return axios.delete(`/api/payment/delete-payment/${id}`, { data: { id } });
};
export { getListPayment, createPayment, deletePayment, updatePayment };
