import axios from "../utils/axiosCustommize";
const getListCartItem = () => {
  return axios.get("/api/cart-item/get-all-cart-item");
};

const deleteProductCart = (cartId, bookId) => {
  return axios.delete(`/api/cart-item/delete-cart-item/${cartId}/${bookId}`, {
    data: { cartId, bookId },
  });
};

export { getListCartItem, deleteProductCart };
