import axios from "../utils/axiosCustommize";

const getListPubliers = () => {
  return axios.get("/api/suppliers/get-all-suppliers");
};

const createSuppliers = (name, contactInfo, description, phone, email) => {
  const data = {
    suppliers_name: name,
    contact_info: contactInfo,
    description: description,
    phone: phone,
    email: email,
  };
  return axios.post("/api/suppliers/create-suppliers", data);
};

const updateSuppliers = (id, dataUpdate) => {
  return axios.put(`/api/suppliers/update-suppliers/${id}`, dataUpdate);
};

const deleteSuppliers = (id) => {
  return axios.delete(`/api/suppliers/delete-suppliers/${id}`, {
    data: { id },
  });
};

const getPage = (page, pageSize) => {
  return axios.get(`/api/suppliers/get-page?page=${page}&pageSize=${pageSize}`);
};
export {
  getListPubliers,
  createSuppliers,
  deleteSuppliers,
  updateSuppliers,
  getPage,
};
