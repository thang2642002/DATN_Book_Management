import axios from "../utils/axiosCustommize";

const getListReview = () => {
  return axios.get("/api/review/get-all-review");
};

const createReview = (bookId, userId, rating, comment, reviewDate) => {
  const data = { bookId, userId, rating, comment, reviewDate };
  return axios.post("/api/review/create-review", data);
};

const updateReview = (id, dataUpdate) => {
  return axios.put(`/api/review/update-review/${id}`, dataUpdate);
};

const deleteReview = (id) => {
  return axios.delete(`/api/review/delete-review/${id}`, { data: { id } });
};

export { getListReview, createReview, deleteReview, updateReview };
