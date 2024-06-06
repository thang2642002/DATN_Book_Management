import axios from "../utils/axiosCustommize";

const getListCart = () => {
  return axios.get("/api/cart/get-all-cart");
};

const createCarts = (userId, createDate, quantity, bookIds) => {
  const data = {
    userId: userId,
    createDate: createDate,
    quantity: quantity,
    bookIds: bookIds,
  };
  return axios.post("/api/cart/craete-cart", data);
};

const deleteCarts = (id) => {
  return axios.delete(`/api/cart/delete-cart/${id}`, { data: { id }} );
};
export { getListCart, createCarts, deleteCarts };
