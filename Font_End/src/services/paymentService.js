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
export { getListPayment, createPayment };
