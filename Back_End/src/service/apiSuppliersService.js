const db = require("../models");

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
  email,
  bookIds
) => {
  try {
    const newSupplier = await db.Suppliers.create({
      suppliers_name,
      contact_info,
      description,
      phone,
      email,
    });

    // Tạo mối quan hệ với các books
    if (bookIds && bookIds.length > 0) {
      await newSupplier.setBooks(bookIds);
    }

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

    const { bookIds, ...supplierData } = dataUpdate;

    await supplier.update(supplierData);

    // Cập nhật mối quan hệ với các books
    if (bookIds && bookIds.length > 0) {
      await supplier.setBooks(bookIds);
    }

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

    // Xóa tất cả các mối quan hệ của nhà cung cấp với sách trong bảng liên kết
    await db.Book_Suppliers.destroy({ where: { supplierId: supplierId } });

    // Sau đó xóa nhà cung cấp
    await supplier.destroy();
    return true;
  } catch (error) {
    console.error("Error deleting supplier:", error);
    throw new Error("Delete supplier failed");
  }
};

module.exports = {
  getAllSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  removeSupplier,
};
