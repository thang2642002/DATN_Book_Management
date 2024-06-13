import db from "../models/index";

const getAllCart = async () => {
  try {
    const carts = await db.Carts.findAll({
      include: [{ model: db.User }, { model: db.Books }],
    });
    console.log("carrts", carts);
    return carts;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getAllCartById = async (id) => {
  try {
    const carts = await db.Carts.findByPk(id, {
      include: [{ model: db.User }, { model: db.Books }],
    });
    return carts;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const createCart = async (userId, createDate, quantity, bookIds) => {
  try {
    const cart = await db.Carts.create({ userId, createDate, quantity });
    console.log("card1", cart);
    console.log("bookIds", bookIds);
    if (bookIds) {
      await cart.setBooks(bookIds);
    }
    console.log("card", cart);
    return cart;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const updateCart = async (id, { userId, createDate, quantity, bookIds }) => {
  try {
    const cart = await db.Carts.findByPk(id);
    console.log(cart);
    if (!cart) {
      return null;
    }
    await cart.update({ userId, createDate, quantity });
    if (bookIds && bookIds.length > 0) {
      await cart.setBooks(bookIds);
    }
    return cart;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const deleteCart = async (id) => {
  try {
    const cart = await db.Carts.findByPk(id);
    if (!cart) {
      return null;
    }
    await db.Cart_Item.destroy({ where: { cartId: id } });
    await cart.destroy();
    return cart;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  getAllCart,
  getAllCartById,
  createCart,
  updateCart,
  deleteCart,
};
