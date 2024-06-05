import axios from "../utils/axiosCustommize";
const getListGenres = () => {
  return axios.get("/api/genres/get-all-genres");
};

const createGenres = (name, description) => {
  const data = { genresName: name, description: description };
  return axios.post("/api/genres/create-genres", data);
};

export { getListGenres, createGenres };
