const db = require("../models/index");
const { fn, col, where, literal } = require("sequelize");

const createOrderBook = async (totalPrice, userId) => {
  try {
    const newOrderBook = await db.Order_Book.create({
      order_date: new Date(),
      totalPrice,
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
      include: [
        {
          model: db.User,
        },
      ],
    });
    return orderBooks;
  } catch (error) {
    console.error("Failed to get all Order_Books:", error);
    throw new Error("Failed to get all Order_Books");
  }
};

const getDataForYear = async (year) => {
  try {
    const monthlyData = await db.Order_Book.findAll({
      attributes: [
        [fn("MONTH", col("order_date")), "month"],
        [fn("YEAR", col("order_date")), "year"],
        [fn("SUM", col("totalPrice")), "totalPrice"],
      ],
      where: where(fn("YEAR", col("order_date")), year),
      group: ["year", "month"],
      order: [
        [fn("MONTH", col("order_date")), "ASC"],
        [fn("YEAR", col("order_date")), "ASC"],
      ],
    });

    // Step 2: Convert the result to a plain array of objects
    const result = monthlyData.map((data) => data.get({ plain: true }));

    // Step 3: Create a complete array for all months of the year with default values
    const completeData = Array.from({ length: 12 }, (_, index) => ({
      year,
      month: index + 1,
      totalPrice: 0,
    }));

    // Step 4: Merge the result into the complete data array
    result.forEach((item) => {
      const index = item.month - 1;
      completeData[index] = item;
    });

    return completeData;
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
  getDataForYear,
};
