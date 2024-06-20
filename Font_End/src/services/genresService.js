import { Axios } from "axios";
import axios from "../utils/axiosCustommize";
const getListGenres = () => {
  return axios.get("/api/genres/get-all-genres");
};

const createGenres = (name, description) => {
  const data = { genresName: name, description: description };
  return axios.post("/api/genres/create-genres", data);
};

const updateGenres = (genresName, description, id) => {
  return axios.put(`/api/genres/update-genres/${id}`, {
    genresName,
    description,
    genresId: id,
  });
};

const deleteGenres = (id) => {
  return axios.delete(`/api/genres/delete-genres/${id}`, { data: { id } });
};

const getPage = (page, pageSize) => {
  return axios.get(`/api/genres/get-page?page=${page}&pageSize=${pageSize}`);
};

export { getListGenres, createGenres, deleteGenres, updateGenres, getPage };
