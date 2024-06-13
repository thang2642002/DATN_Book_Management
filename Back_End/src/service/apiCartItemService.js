import db from "../models/index";

const getAllCartItem = async () => {
  try {
    const cartItem = await db.Cart_Item.findAll({
      include: [{ model: db.Carts }, { model: db.Books }],
    });
    console.log("cartItem", cartItem);
    return cartItem;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const deleteCartItem = async (cartId, bookId) => {
  try {
    const deletedCartItem = await db.Cart_Item.destroy({
      where: { cartId: cartId, bookId: bookId },
    });
    if (deletedCartItem) {
      return deleteCartItem;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error deleting cart item:", error);
    throw error;
  }
};
module.exports = { getAllCartItem, deleteCartItem };
