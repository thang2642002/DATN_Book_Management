import { Axios } from "axios";
import axios from "../utils/axiosCustommize";
const getListGenres = () => {
  return axios.get("/api/genres/get-all-genres");
};

const createGenres = (name, description) => {
  const data = { genresName: name, description: description };
  return axios.post("/api/genres/create-genres", data);
};

const updateGenres = (id, genresName, description) => {
  const data = { genresName, description };
  return axios.put(`/api/genres/update-genres/${id}`, {
    data: { genresId: id, data },
  });
};

const deleteGenres = (id) => {
  return axios.delete(`/api/genres/delete-genres/${id}`, { data: { id } });
};

export { getListGenres, createGenres, deleteGenres, updateGenres };
