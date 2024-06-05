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

export { getListAuthor, createAuthor };
