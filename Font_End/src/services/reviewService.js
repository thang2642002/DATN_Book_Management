import axios from "../utils/axiosCustommize";

const getListReview = () => {
  return axios.get("/api/review/get-all-review");
};

const createReview = (bookId, userId, rating, comment, reviewDate) => {
  const data = { bookId, userId, rating, comment, reviewDate };
  return axios.post("/api/review/create-review", data);
};

export { getListReview, createReview };
