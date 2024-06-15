import axios from "../utils/axiosCustommize";
const getListCartItem = () => {
  return axios.get("/api/cart-item/get-all-cart-item");
};

const deleteProductCart = (cartId, bookId) => {
  return axios.delete(`/api/cart-item/delete-cart-item/${cartId}/${bookId}`, {
    data: { cartId, bookId },
  });
};

const updateCartItem = (id, quantity) => {
  console.log("id", id);
  console.log("quantity", quantity);
  return axios.put(`/api/cart-item/update-cart-item/${id}`, {
    data: { quantity },
  });
};

export { getListCartItem, deleteProductCart, updateCartItem };
