import db from "../models/index";

const getAllCart = async () => {
  try {
    const carts = await db.Carts.findAll({
      include: [
        { model: db.User },
        { model: db.Books },
        { model: db.Cart_Item },
      ],
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

// const createCart = async (userId, createDate, quantity, bookIds) => {
//   try {
//     const cart = await db.Carts.create({ userId, createDate, quantity });
//     console.log("card1", cart);
//     console.log("bookIds", bookIds);
//     if (bookIds) {
//       await cart.setBooks(bookIds);
//     }
//     console.log("card", cart);
//     return cart;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// };

const createCart = async (userId, createDate, quantity, bookId) => {
  let transaction;
  try {
    // Bắt đầu một transaction để đảm bảo tính nhất quán trong cơ sở dữ liệu
    transaction = await db.sequelize.transaction();

    // Tìm hoặc tạo mới giỏ hàng của người dùng
    let cart = await db.Carts.findOne({
      where: { userId },
      transaction,
    });

    if (!cart) {
      // Nếu giỏ hàng chưa tồn tại, tạo mới giỏ hàng
      cart = await db.Carts.create(
        {
          userId,
          createDate: new Date().toISOString(),
          quantity: 0, // Khởi tạo số lượng giỏ hàng là 0
        },
        { transaction }
      );
    }

    // Tìm sản phẩm trong giỏ hàng
    let cartItem = await db.Cart_Item.findOne({
      where: {
        cartId: cart.id,
        bookId,
      },
      transaction,
    });

    if (cartItem) {
      // Nếu sản phẩm đã có trong giỏ hàng, chỉ cập nhật số lượng
      cartItem.quantity += quantity;
      await cartItem.save({ transaction });

      // Cập nhật tổng số lượng của giỏ hàng
      cart.quantity += quantity;
      await cart.save({ transaction });
    } else {
      // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới
      cartItem = await db.Cart_Item.create(
        {
          cartId: cart.id,
          bookId,
          quantity,
        },
        { transaction }
      );

      // Cập nhật tổng số lượng của giỏ hàng
      cart.quantity += quantity;
      await cart.save({ transaction });
    }

    // Commit transaction nếu mọi thứ thành công
    await transaction.commit();

    return cart;
  } catch (error) {
    // Nếu có lỗi, rollback transaction và log lỗi
    if (transaction) await transaction.rollback();
    console.error(error);
    return null;
  }
};

// const createCart = async (userId, createDate, quantity, bookId) => {
//   let transaction;

//   try {
//     // Start a transaction to ensure atomic operations
//     transaction = await db.sequelize.transaction();

//     // Tìm giỏ hàng của người dùng
//     let cart = await db.Carts.findOne({ where: { userId }, transaction });

//     if (!cart) {
//       // Nếu giỏ hàng chưa tồn tại, tạo mới giỏ hàng
//       cart = await db.Carts.create({
//         userId,
//         createDate: new Date().toISOString(),
//         quantity: 0,
//       }, { transaction });
//     }

//     // Tìm sản phẩm trong giỏ hàng
//     let cartItem = await db.Cart_Item.findOne({
//       where: {
//         cartId: cart.id,
//         bookId,
//       },
//       transaction,
//     });

//     if (cartItem) {
//       // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
//       cartItem.quantity += quantity;
//       await cartItem.save({ transaction });

//       // Cập nhật tổng số lượng sản phẩm trong giỏ hàng
//       cart.quantity += quantity;
//       await cart.save({ transaction });
//     } else {
//       // Nếu sản phẩm chưa có trong giỏ hàng, tạo mới cartItem
//       cartItem = await db.Cart_Item.create({
//         cartId: cart.id,
//         bookId,
//         quantity,
//       }, { transaction });

//       // Cập nhật tổng số lượng sản phẩm trong giỏ hàng
//       cart.quantity += quantity;
//       await cart.save({ transaction });
//     }

//     // Commit the transaction
//     await transaction.commit();

//     return cart;
//   } catch (error) {
//     // Rollback the transaction if there's an error
//     if (transaction) await transaction.rollback();

//     console.error(error);
//     return null;
//   }
// };

// const createCart = async (userId, createDate, quantity, bookId) => {
//   let transaction;

//   try {
//     // Start a transaction to ensure atomic operations
//     transaction = await db.sequelize.transaction();

//     // Tìm giỏ hàng của người dùng
//     let cart = await db.Carts.findOne({ where: { userId }, transaction });

//     // Tìm sản phẩm trong giỏ hàng
//     let cartItem = await db.Cart_Item.findOne({
//       where: {
//         cartId: cart.id,
//         bookId,
//       },
//       transaction,
//     });

//     if (cartItem) {
//       // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
//       cartItem.quantity += quantity;
//       await cartItem.save({ transaction });

//       // Cập nhật tổng số lượng sản phẩm trong giỏ hàng
//       cart.quantity += quantity;
//       await cart.save({ transaction });
//     } else {
//       // Nếu sản phẩm chưa có trong giỏ hàng, tạo mới giỏ hàng và cartItem
//       cart = await db.Carts.create(
//         {
//           userId,
//           createDate: new Date().toISOString(),
//           quantity,
//         },
//         { transaction }
//       );

//       cartItem = await db.Cart_Item.create(
//         {
//           cartId: cart.id,
//           bookId,
//           quantity,
//         },
//         { transaction }
//       );
//     }

//     // Commit the transaction
//     await transaction.commit();

//     return cart;
//   } catch (error) {
//     // Rollback the transaction if there's an error
//     if (transaction) await transaction.rollback();

//     console.error(error);
//     return null;
//   }
// };

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
    await db.Carts.destroy({ where: { userId: id } });
    return true;
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
