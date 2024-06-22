import axios from "../utils/axiosCustommize";
const getListGenres = () => {
  return axios.get("/api/genres/get-all-genres");
};

const createGenres = async (genresName, description, img_genres) => {
  const genresData = new FormData();
  genresData.append("genresName", genresName);
  genresData.append("description", description);
  genresData.append("img_genres", img_genres);
  return axios.post("/api/genres/create-genres", genresData);
};

const updateGenres = (genresName, description, id, img_genres) => {
  const genresData = new FormData();
  genresData.append("genresName", genresName);
  genresData.append("description", description);
  genresData.append("img_genres", img_genres);
  return axios.put(`/api/genres/update-genres/${id}`, genresData);
};

const deleteGenres = (id) => {
  return axios.delete(`/api/genres/delete-genres/${id}`, { data: { id } });
};

const getPage = (page, pageSize) => {
  return axios.get(`/api/genres/get-page?page=${page}&pageSize=${pageSize}`);
};

export { getListGenres, createGenres, deleteGenres, updateGenres, getPage };
