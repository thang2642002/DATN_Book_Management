const apiSupplierService = require("../service/apiSuppliersService");

const getAllSuppliers = async (req, res) => {
  try {
    let listSupplier = await apiSupplierService.getAllSuppliers();
    if (listSupplier) {
      return res.status(200).json({
        message: "Show List Supplier is successful",
        errcode: 0,
        data: listSupplier,
      });
    } else {
      return res.status(200).json({
        message: "Show List Supplier failed",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Show List Supplier error",
      errcode: -1,
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
        errcode: 0,
        data: supplierById,
      });
    } else {
      return res.status(200).json({
        message: "Get supplier by id failed",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Get supplier by id error",
      errcode: -1,
    });
  }
};

const createSupplier = async (req, res) => {
  const { suppliers_name, contact_info, description, phone, email } = req.body;

  try {
    if (!suppliers_name || !contact_info || !description || !phone || !email) {
      return res.status(200).json({
        message: "All fields are required",
        errcode: 1,
      });
    }

    const dataSupplier = await apiSupplierService.createSupplier(
      suppliers_name,
      contact_info,
      description,
      phone,
      email
    );

    if (dataSupplier) {
      return res.status(200).json({
        message: "Create supplier is successful",
        errcode: 0,
        data: dataSupplier,
      });
    } else {
      return res.status(200).json({
        message: "Create supplier failed",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Create supplier error",
      errcode: -1,
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
        errcode: 0,
        data: updateSupplier,
      });
    } else {
      return res.status(404).json({
        message: "Update supplier failed: Supplier not found",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while updating the supplier",
      errcode: -1,
    });
  }
};

const deleteSupplier = async (req, res) => {
  const supplierId = req.params.id;

  if (!supplierId) {
    return res
      .status(400)
      .json({ message: "Supplier ID is required", errcode: 1 });
  }

  try {
    const result = await apiSupplierService.removeSupplier(supplierId);
    if (result) {
      return res.status(200).json({
        message: "Supplier deleted successfully",
        errcode: 0,
        data: result,
      });
    } else {
      return res
        .status(404)
        .json({ message: "Supplier not found", errcode: 1 });
    }
  } catch (error) {
    console.error("Error deleting supplier:", error);
    return res
      .status(500)
      .json({ message: "Delete supplier failed", errcode: -1 });
  }
};

module.exports = {
  createSupplier,
  updateSupplier,
  deleteSupplier,
  getAllSuppliers,
  getSupplierById,
};
