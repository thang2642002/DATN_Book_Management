import axios from "../utils/axiosCustommize";

const getListBooks = () => {
  return axios.get("/api/products/get-all-product");
};

const deleteBook = (id) => {
  return axios.delete(`/api/products/delete-product/${id}`, { data: { id } });
};

export { getListBooks, deleteBook };
