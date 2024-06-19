import axios from "../utils/axiosCustommize";

const getListOrderDetails = () => {
  return axios.get("/api/orderdetails/get-all-orderDetails");
};

const getOderDetailsById = (id) => {
  return axios.get(`/api/orderdetails/get-orderDetails-by-id/${id}`, {
    data: { id },
  });
};

const createOrderDetails = (quantity, unitPrice, orderId, bookId, userId) => {
  const data = {
    quantity: quantity,
    unit_price: unitPrice,
    orderId: orderId,
    bookId: bookId,
    userId: userId,
  };
  return axios.post("/api/orderdetails/craete-orderDetails", data);
};

const updateOrderDetails = (id, dataOrderDetails) => {
  return axios.put(
    `/api/orderdetails/update-orderDetails/${id}`,
    dataOrderDetails
  );
};

const deleteOrderDetails = (id) => {
  return axios.delete(`/api/orderdetails/delete-orderDetails/${id}`, {
    data: { id },
  });
};

export {
  createOrderDetails,
  getListOrderDetails,
  deleteOrderDetails,
  updateOrderDetails,
  getOderDetailsById,
};
