import axios from "../utils/axiosCustommize";

const getListReview = () => {
  return axios.get("/api/review/get-all-review");
};
const getListReviewById = (id) => {
  return axios.get(`/api/review/get-review-by-id/${id}`, { data: { id } });
};

const createReview = (bookId, userId, comment) => {
  // const data = { bookId, userId, rating, comment, reviewDate };
  const data = { bookId, userId, comment };
  return axios.post("/api/review/create-review", data);
};

const updateReview = (id, dataUpdate) => {
  return axios.put(`/api/review/update-review/${id}`, dataUpdate);
};

const deleteReview = (id) => {
  return axios.delete(`/api/review/delete-review/${id}`, { data: { id } });
};

const getPage = (page, pageSize) => {
  return axios.get(`/api/review/get-page?page=${page}&pageSize=${pageSize}`);
};

export {
  getListReview,
  createReview,
  deleteReview,
  updateReview,
  getListReviewById,
  getPage,
};
