const orderBookService = require("../service/apiOrderBookService");

const createOrderBook = async (req, res) => {
  const { order_date, totalPrice, description, userId } = req.body;

  try {
    if (!order_date || !totalPrice || !userId) {
      return res.status(201).json({
        message: "Input is the required",
      });
    }
    const newOrderBook = await orderBookService.createOrderBook(
      order_date,
      totalPrice,
      description,
      userId
    );
    if (newOrderBook) {
      return res.status(200).json({
        message: "Order_Book created successfully",
        data: newOrderBook,
      });
    } else {
      return res.status(201).json({
        message: "Order_Book created is the faild",
        data: newOrderBook,
      });
    }
  } catch (error) {
    console.error("Error creating Order_Book:", error);
    return res.status(500).json({
      message: "Failed to create Order_Book",
      error: error.message,
    });
  }
};

const updateOrderBook = async (req, res) => {
  const orderId = req.params.id;
  const updatedData = req.body;

  try {
    const orderBook = await orderBookService.updateOrderBook(
      orderId,
      updatedData
    );

    if (!orderBook) {
      return res.status(404).json({ message: "Order_Book not found" });
    }

    return res.status(200).json({
      message: "Order_Book updated successfully",
      data: orderBook,
    });
  } catch (error) {
    console.error("Error updating Order_Book:", error);
    return res.status(500).json({
      message: "Failed to update Order_Book",
      error: error.message,
    });
  }
};

const deleteOrderBook = async (req, res) => {
  const orderId = req.params.id;

  try {
    const deletedOrderBook = await orderBookService.deleteOrderBook(orderId);

    if (!deletedOrderBook) {
      return res.status(404).json({ message: "Order_Book not found" });
    }

    return res.status(200).json({ message: "Order_Book deleted successfully" });
  } catch (error) {
    console.error("Error deleting Order_Book:", error);
    return res.status(500).json({
      message: "Failed to delete Order_Book",
      error: error.message,
    });
  }
};

const getOrderBookById = async (req, res) => {
  const orderId = req.params.id;

  try {
    const orderBook = await orderBookService.getOrderBookById(orderId);

    if (!orderBook) {
      return res
        .status(404)
        .json({ message: "Order_Book not found", data: [] });
    }

    return res.status(200).json({
      message: "Order_Book retrieved successfully",
      data: orderBook,
    });
  } catch (error) {
    console.error("Error getting Order_Book:", error);
    return res.status(500).json({
      message: "Failed to get Order_Book",
      error: error.message,
    });
  }
};

const getAllOrderBooks = async (req, res) => {
  try {
    const orderBooks = await orderBookService.getAllOrderBooks();
    if (orderBooks) {
      return res.status(200).json({
        message: "All Order_Books retrieved successfully",
        data: orderBooks,
      });
    } else {
      return res.status(200).json({
        message: "All Order_Books retrieved faild",
        data: [],
      });
    }
  } catch (error) {
    console.error("Error getting all Order_Books:", error);
    return res.status(500).json({
      message: "Failed to get all Order_Books",
      error: error.message,
    });
  }
};

module.exports = {
  createOrderBook,
  updateOrderBook,
  deleteOrderBook,
  getOrderBookById,
  getAllOrderBooks,
};
