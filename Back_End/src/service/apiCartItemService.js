import db from "../models/index";

const getAllCartItem = async () => {
  try {
    const cartItem = await db.Cart_Item.findAll({
      attributes: ["id", "quantity"],
      include: [{ model: db.Carts }, { model: db.Books }],
    });

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
const updateCartItem = async (id, quantity) => {
  console.log(id);
  console.log(quantity);
  const cartItem = await db.Cart_Item.findOne({
    where: {
      id: id,
    },
  });
  console.log("cartItem", cartItem);
  if (!cartItem) {
    return null;
  }
  await cartItem.update({ quantity });
  console.log("cartItem11111", cartItem);
  return cartItem;
};

module.exports = { getAllCartItem, deleteCartItem, updateCartItem };
