import axios from "../utils/axiosCustommize";

const getListOrder = () => {
  return axios.get("/api/orderbook/get-all-order");
};

const createOrder = (orderDate, description, totalPrice, userId) => {
  const data = {
    order_date: orderDate,
    description: description,
    totalPrice: totalPrice,
    userId: userId,
  };
  return axios.post("/api/orderbook/create-order", data);
};

const deleteOrder = (id) => {
  return axios.delete(`/api/orderbook/delete-order/${id}`, { data: { id } });
};

export { getListOrder, createOrder, deleteOrder };
