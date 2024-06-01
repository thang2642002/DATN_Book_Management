const apiSupplierService = require("../service/apiSuppliersService");

const getAllSuppliers = async (req, res) => {
  try {
    let listSupplier = await apiSupplierService.getAllSuppliers();
    if (listSupplier) {
      return res.status(200).json({
        message: "Show List Supplier is successful",
        data: listSupplier,
      });
    } else {
      return res.status(200).json({
        message: "Show List Supplier failed",
        data: [],
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Show List Supplier error",
      data: [],
    });
  }
};

const getSupplierById = async (req, res) => {
  const id = req.params.id;

  try {
    let supplierById = await apiSupplierService.getSupplierById(id);
    if (supplierById) {
      return res.status(200).json({
        message: "Get supplier by id is successful",
        data: supplierById,
      });
    } else {
      return res.status(200).json({
        message: "Get supplier by id failed",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Get supplier by id error",
    });
  }
};

const createSupplier = async (req, res) => {
  const { suppliers_name, contact_info, description, phone, email, bookIds } =
    req.body;

  try {
    if (
      !suppliers_name ||
      !contact_info ||
      !description ||
      !phone ||
      !email ||
      !bookIds
    ) {
      return res.status(200).json({
        message: "All fields are required",
      });
    }

    const dataSupplier = await apiSupplierService.createSupplier(
      suppliers_name,
      contact_info,
      description,
      phone,
      email,
      bookIds
    );

    if (dataSupplier) {
      return res.status(200).json({
        message: "Create supplier is successful",
        data: dataSupplier,
      });
    } else {
      return res.status(200).json({
        message: "Create supplier failed",
        data: [],
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Create supplier error",
      data: [],
    });
  }
};

const updateSupplier = async (req, res) => {
  const id = req.params.id;
  const dataUpdate = req.body;

  try {
    let updateSupplier = await apiSupplierService.updateSupplier(
      id,
      dataUpdate
    );
    if (updateSupplier) {
      return res.status(200).json({
        message: "Update supplier was successful",
        data: updateSupplier,
      });
    } else {
      return res.status(404).json({
        message: "Update supplier failed: Supplier not found",
        data: [],
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while updating the supplier",
    });
  }
};

const deleteSupplier = async (req, res) => {
  const supplierId = req.params.id;

  if (!supplierId) {
    return res.status(400).json({ message: "Supplier ID is required" });
  }

  try {
    const result = await apiSupplierService.removeSupplier(supplierId);
    if (result) {
      return res
        .status(200)
        .json({ message: "Supplier deleted successfully", data: result });
    } else {
      return res.status(404).json({ message: "Supplier not found" });
    }
  } catch (error) {
    console.error("Error deleting supplier:", error);
    return res.status(500).json({ message: "Delete supplier failed" });
  }
};

module.exports = {
  createSupplier,
  updateSupplier,
  deleteSupplier,
  getAllSuppliers,
  getSupplierById,
};
