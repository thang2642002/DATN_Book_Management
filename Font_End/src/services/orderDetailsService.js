import axios from "../utils/axiosCustommize";

const getListOrderDetails = () => {
  return axios.get("/api/orderdetails/get-all-orderDetails");
};

const createOrderDetails = (
  quantity,
  unitPrice,
  description,
  orderId,
  bookId
) => {
  const data = {
    quantity: quantity,
    unit_price: unitPrice,
    description: description,
    orderId: orderId,
    bookId: bookId,
  };
  return axios.post("/api/orderdetails/craete-orderDetails", data);
};

const deleteOrderDetails = (id) => {
  return axios.delete(`/api/orderdetails/delete-orderDetails/${id}`, {
    data: { id },
  });
};

export { createOrderDetails, getListOrderDetails, deleteOrderDetails };
