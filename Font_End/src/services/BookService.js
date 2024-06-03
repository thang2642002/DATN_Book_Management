import axios from "../utils/axiosCustommize";

const getListBooks = () => {
  return axios.get("/api/products/get-all-product");
};

export { getListBooks };
