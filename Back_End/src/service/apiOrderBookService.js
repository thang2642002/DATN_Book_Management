const db = require("../models/index");

const createOrderBook = async (order_date, totalPrice, description, userId) => {
  try {
    const newOrderBook = await db.Order_Book.create({
      order_date,
      totalPrice,
      description,
      userId,
    });
    if (!newOrderBook) {
      return null;
    }

    return newOrderBook;
  } catch (error) {
    throw new Error("Failed to create Order_Book");
  }
};

const updateOrderBook = async (orderId, updatedData) => {
  try {
    const orderBook = await db.Order_Book.findByPk(orderId);

    if (!orderBook) {
      return null;
    }

    await orderBook.update(updatedData);

    return orderBook;
  } catch (error) {
    throw new Error("Failed to update Order_Book");
  }
};

const deleteOrderBook = async (orderId) => {
  try {
    const orderBook = await db.Order_Book.findByPk(orderId);

    if (!orderBook) {
      return null;
    }

    await orderBook.destroy();

    return true;
  } catch (error) {
    throw new Error("Failed to delete Order_Book");
  }
};

const getOrderBookById = async (orderId) => {
  try {
    const orderBook = await db.Order_Book.findByPk(orderId, {
      include: db.User,
    });
    return orderBook;
  } catch (error) {
    console.error("Failed to get Order_Book by ID:", error);
    throw new Error("Failed to get Order_Book by ID");
  }
};

const getAllOrderBooks = async () => {
  try {
    const orderBooks = await db.Order_Book.findAll({
      include: db.User,
    });
    return orderBooks;
  } catch (error) {
    console.error("Failed to get all Order_Books:", error);
    throw new Error("Failed to get all Order_Books");
  }
};

module.exports = {
  createOrderBook,
  updateOrderBook,
  deleteOrderBook,
  getOrderBookById,
  getAllOrderBooks,
};
