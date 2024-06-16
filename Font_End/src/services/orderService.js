import axios from "../utils/axiosCustommize";

const getListOrder = () => {
  return axios.get("/api/orderbook/get-all-order");
};

const getDataToChart = (year) => {
  return axios.get(`/api/orderbook/static/${year}`);
};

const createOrder = (totalPrice, userId) => {
  const data = {
    totalPrice: totalPrice,
    userId: userId,
  };
  return axios.post("/api/orderbook/create-order", data);
};

const updateOrder = (id, updatedData) => {
  return axios.put(`/api/orderbook/update-order/${id}`, updatedData);
};

const deleteOrder = (id) => {
  return axios.delete(`/api/orderbook/delete-order/${id}`, { data: { id } });
};

export { getListOrder, createOrder, deleteOrder, updateOrder, getDataToChart };
