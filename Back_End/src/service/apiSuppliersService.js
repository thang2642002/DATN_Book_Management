const db = require("../models");

const fetchPaginatedSuppliers = async (page, pageSize) => {
  try {
    const totalSuppliers = await db.Suppliers.count();
    const listSuppliers = await db.Suppliers.findAll({
      limit: pageSize,
      offset: (page - 1) * pageSize,
    });
    const totalPages = Math.ceil(totalSuppliers / pageSize);
    return {
      totalItems: totalSuppliers,
      totalPages: totalPages,
      data: listSuppliers,
    };
  } catch (error) {
    console.error("Error fetching paginated Suppliers:", error);
    throw error;
  }
};

const getAllSuppliers = async () => {
  try {
    const listSupplier = await db.Suppliers.findAll({
      include: [
        {
          model: db.Books,
          // through: {
          //   model: db.Book_Suppliers,
          //   attributes: [],
          // },
        },
      ],
    });
    return listSupplier;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getSupplierById = async (id) => {
  try {
    const supplier = await db.Suppliers.findOne({
      where: { id: id },
      include: [
        {
          model: db.Books,
          through: {
            model: db.Book_Suppliers,
            attributes: [],
          },
        },
      ],
    });
    return supplier;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const createSupplier = async (
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

    return newSupplier;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const updateSupplier = async (id, dataUpdate) => {
  try {
    const supplier = await db.Suppliers.findByPk(id);
    if (!supplier) {
      return null;
    }

    await supplier.update(dataUpdate);
    return supplier;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update supplier");
  }
};

const removeSupplier = async (supplierId) => {
  try {
    const supplier = await db.Suppliers.findByPk(supplierId);
    if (!supplier) {
      return false;
    }

    await supplier.destroy();
    return true;
  } catch (error) {
    console.error("Error deleting supplier:", error);
    throw new Error("Delete supplier failed");
  }
};

module.exports = {
  fetchPaginatedSuppliers,
  getAllSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  removeSupplier,
};
