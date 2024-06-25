import axios from "../utils/axiosCustommize";

const createPayMentVnPay = (amount, orderId) => {
  return axios.post(`/create_payment_url`, { amount, orderId });
};

const getPayMentVnPay = (vnp_Params) => {
  return axios.post(`/vnpay_return/${vnp_Params}`);
};

export { createPayMentVnPay, getPayMentVnPay };
