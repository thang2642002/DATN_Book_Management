import axios from "../utils/axiosCustommize";

const getListPubliers = () => {
  return axios.get("/api/suppliers/get-all-suppliers");
};

const createSuppliers = (
  name,
  contactInfo,
  description,
  phone,
  email,
  bookIds
) => {
  const data = {
    suppliers_name: name,
    contact_info: contactInfo,
    description: description,
    phone: phone,
    email: email,
    bookIds: bookIds,
  };
  return axios.post("/api/suppliers/create-suppliers", data);
};
export { getListPubliers, createSuppliers };
