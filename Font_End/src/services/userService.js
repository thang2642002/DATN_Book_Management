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

  return axios.put(`/api/users/update-user/${id}`, dataUser);
};

const deleteUser = (id, role) => {
  return axios.delete(`/api/users/delete-user/${id}?role=${role}`, {
    data: { id },
  });
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

const getPage = (page, pageSize, username) => {
  if (username) {
    return axios.get(
      `/api/users/get-page?page=${page}&pageSize=${pageSize}&username= ${username}`
    );
  } else {
    return axios.get(`/api/users/get-page?page=${page}&pageSize=${pageSize}`);
  }
};

const getByName = (username) => {
  return axios.get(`/api/users/findByUserName?username=${username}`);
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
  getPage,
  getByName,
};
