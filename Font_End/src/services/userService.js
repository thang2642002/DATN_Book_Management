import axios from "../utils/axiosCustommize";
const registerNewUser = (email, userName, phone, address, password) => {
  return axios.post("http://localhost:5000/api/users/register", {
    email,
    userName,
    phone,
    address,
    password,
  });
};

const Login = (email, password) => {
  return axios.post("http://localhost:5000/api/users/login", {
    email,
    password,
  });
};

const createUser = (email, password, username, address, phone, role, image) => {
  const dataUser = new FormData();
  dataUser.append("email", email);
  dataUser.append("password", password);
  dataUser.append("username", username);
  dataUser.append("address", address);
  dataUser.append("phone", phone);
  dataUser.append("role", role);
  dataUser.append("avatar", image);

  return axios.post("/api/users/create-user", dataUser);
};

const updateUser = (id, username, address, phone, role, image) => {
  const dataUser = new FormData();
  dataUser.append("username", username);
  dataUser.append("phone", phone);
  dataUser.append("address", address);
  dataUser.append("role", role);
  dataUser.append("avatar", image);

  console.log("check userdata:", dataUser);
  console.log("check userdata id:", id);

  return axios.put(`/api/users/update-user/${id}`, {
    data: { id, dataUser },
  });
};

const deleteUser = (id) => {
  return axios.delete(`/api/users/delete-user/${id}`, { data: { id } });
};

const getListUser = () => {
  return axios.get("/api/users/get-all-user");
};

const getUserById = (id) => {
  return axios.get(`/api/users/get-user-by-id/${id}`, { data: { id } });
};
const logOut = () => {
  return axios.post("/api/users/logout");
};

export {
  registerNewUser,
  Login,
  createUser,
  getListUser,
  updateUser,
  deleteUser,
  getUserById,
  logOut,
};
