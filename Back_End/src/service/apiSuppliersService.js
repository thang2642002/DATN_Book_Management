import db from "../models/index";
import { Op } from "sequelize";

const getSuppliersByName = async (name) => {
  try {
    const nameSuppliers = await db.Suppliers.findAll({
      where: {
        suppliers_name: {
          [Op.like]: `%${name}%`,
        },
      },
    });
    return nameSuppliers;
  } catch (error) {
    console.error("Error fetching suppliers by name: ", error);
    throw error;
  }
};

const getAllSuppliers = async () => {
  try {
    const supplier = await db.Suppliers.findAll();
    if (!supplier) {
      return null;
    }
    return supplier;
  } catch (error) {
    console.log(error);
  }
};

const getSuppliersById = async (id) => {
  try {
    let supplier = await db.Suppliers.findOne({
      where: { id: id },
    });
    if (!supplier) {
      return null;
    }
    return supplier;
  } catch (error) {
    console.log(error);
  }
};

const createSuppliers = async (
  suppliers_name,
  contact_info,
  description,
  phone,
  email
) => {
  try {
    const newSupplier = await db.Suppliers.create({
      suppliers_name,
      contact_info,
      description,
      phone,
      email,
    });
    if (!newSupplier) {
      return null;
    }
    return newSupplier;
  } catch (error) {
    console.error("Error creating supplier: ", error);
  }
};

const updateSuppliers = async (id, dataSuppliers) => {
  try {
    const idSuppliers = await db.Suppliers.findOne({
      where: {
        id: id,
      },
    });
    if (!idSuppliers) {
      return null;
    }
    await idSuppliers.update(dataSuppliers);
    return idSuppliers;
  } catch (error) {
    console.log(error);
  }
};

const deleteSuppliers = async (id) => {
  try {
    const supplier = await db.Suppliers.findOne({
      id: id,
    });
    if (!supplier) {
      return null;
    }
    await supplier.destroy();
    return supplier;
  } catch (error) {
    console.log(error);
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
