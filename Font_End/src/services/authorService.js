import axios from "../utils/axiosCustommize";

const getListAuthor = () => {
  return axios.get("/api/author/get-all-author");
};

export { getListAuthor };
