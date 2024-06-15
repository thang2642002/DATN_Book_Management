import axios from "../utils/axiosCustommize";

const getIdClient = () => {
  return axios.get(`/api/paypall/config`);
};

export { getIdClient };
