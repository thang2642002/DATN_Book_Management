const createSuppliers = (req, res) => {
  const { suppliers_name, contact_info, description, phone, email } = req.body;
  console.log(
    "chẹc body: ",
    suppliers_name,
    contact_info,
    description,
    phone,
    email
  );
  res.send("Supplier created");
};

module.exports = {
  createSuppliers,
};
