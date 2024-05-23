import axios from "axios";
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

export { registerNewUser, Login };
