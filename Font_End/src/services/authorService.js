import axios from "../utils/axiosCustommize";

const getListAuthor = () => {
  return axios.get("/api/author/get-all-author");
};

const createAuthor = (name, address, phone, bio) => {
  const data = {
    author_name: name,
    address: address,
    phone: phone,
    bio: bio,
  };
  return axios.post("/api/author/craete-author", data);
};

const updateAuthor = (id, authorUpdate) => {
  return axios.put(`/api/author/update-author/${id}`, authorUpdate);
};

const deleteAuthor = (id) => {
  return axios.delete(`/api/author/delete-author/${id}`, { data: { id } });
};

const getPage = (page, pageSize) => {
  return axios.get(`/api/author/get-page?page=${page}&pageSize=${pageSize}`);
};

export { getListAuthor, createAuthor, deleteAuthor, updateAuthor, getPage };
