import apiCartItemService from "../service/apiCartItemService";

const getAllCartItem = async (req, res) => {
  try {
    const data = await apiCartItemService.getAllCartItem();
    if (data) {
      return res.status(200).json({
        message: "Get all cart item is the success",
        errCode: 0,
        data: data,
      });
    } else {
      return res.status(404).json({
        message: "Get all cart item is the faild",
        errCode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      message: "Get all cart item is the error",
      errCode: -1,
    });
  }
};

const deleteCartItem = async (req, res) => {
  try {
    const { cartId, bookId } = req.params;
    const dataDelete = await apiCartItemService.deleteCartItem(cartId, bookId);
    if (dataDelete) {
      return res.status(200).json({
        message: "Deleted cart item successfully",
        errCode: 0,
        data: dataDelete,
      });
    } else {
      return res.status(404).json({
        message: "Cart item not found or delete failed",
        errCode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.error("Error deleting cart item:", error);
    return res.status(500).json({
      message: "Internal server error",
      errCode: -1,
    });
  }
};

module.exports = { getAllCartItem, deleteCartItem };
