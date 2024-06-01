import apiSuppliersService from "../service/apiSuppliersService";

const getSuppliersByName = async (req, res) => {
  const { suppliers_name: name } = req.body;
  console.log("check name", name);

  if (!name) {
    return res.status(400).json({
      message: "Supplier name is required",
    });
  }

  try {
    const nameSuppliers = await apiSuppliersService.getSuppliersByName(name);
    if (nameSuppliers.length > 0) {
      return res.status(200).json({
        message: "Show Suppliers by name is successful",
        data: nameSuppliers,
      });
    } else {
      return res.status(404).json({
        message: "Supplier not found",
        data: [],
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching suppliers by name",
    });
  }
};

const getAllSuppliers = async (req, res) => {
  try {
    const dataSuppliers = await apiSuppliersService.getAllSuppliers();
    if (dataSuppliers) {
      return res.status(200).json({
        message: "Show all suppliers is the success",
        data: dataSuppliers,
      });
    } else {
      return res.status(200).json({
        message: "Show all suppliers is the faild",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Show all suppliers is the error",
    });
  }
};

const getSuppliersById = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  try {
    let supplier = await apiSuppliersService.getSuppliersById(id);
    if (supplier) {
      return res.status(200).json({
        message: "Show Suppliers by id is the succress",
        data: supplier,
      });
    } else {
      return res.status(200).json({
        message: "Show Suppliers by id is the succress",
        data: [],
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Show Suppliers by id is the succress",
    });
  }
};

const createSuppliers = async (req, res) => {
  const { suppliers_name, contact_info, description, phone, email } = req.body;
  try {
    if (!suppliers_name || !contact_info || !description || !phone || !email) {
      return res.status(200).json({
        message: "Input is the requid",
      });
    }
    let dataSuppliers = await apiSuppliersService.createSuppliers(
      suppliers_name,
      contact_info,
      description,
      phone,
      email
    );
    if (dataSuppliers) {
      return res.status(200).json({
        message: "Create suppliers is the success",
        data: dataSuppliers,
      });
    } else {
      return res.status(200).json({
        message: "Create suppliers is the faild",
        data: [],
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Create suppliers is the error",
    });
  }
};

const updateSuppliers = async (req, res) => {
  const id = req.params.id;
  const dataSuppliers = req.body;

  try {
    const updateSuppliers = await apiSuppliersService.updateSuppliers(
      id,
      dataSuppliers
    );
    if (updateSuppliers) {
      return res.status(200).json({
        message: "Update Suppliesr is the success",
        data: updateSuppliers,
      });
    } else {
      return res.status(200).json({
        message: "Update Suppliesr is the faild",
        data: updateSuppliers,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Update Suppliesr is the error",
      data: updateSuppliers,
    });
  }
};

const deleteSuppliers = async (req, res) => {
  const id = req.body.id;
  try {
    const deleteSuppliers = await apiSuppliersService.deleteSuppliers(id);
    if (deleteSuppliers) {
      return res.status(200).json({
        message: "Delete Suppliers is the success",
        data: deleteSuppliers,
      });
    } else {
      return res.status(200).json({
        message: "Delete Suppliers is the faild",
        data: [],
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Delete Suppliers is the error",
    });
  }
};

module.exports = {
  getSuppliersByName,
  getAllSuppliers,
  getSuppliersById,
  createSuppliers,
  updateSuppliers,
  deleteSuppliers,
};
