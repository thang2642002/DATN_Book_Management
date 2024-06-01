const db = require("../models/index");

const getAllUser = async () => {
  try {
    const listUser = await db.User.findAll();
    return listUser;
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (userId) => {
  try {
    const user = await db.User.findOne({
      where: { id: userId },
    });
    return user;
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (
  email,
  password,
  username,
  address,
  phone,
  role,
  avatar = req.body.base64Image
) => {
  try {
    const checkEmailExist = await db.User.findOne({
      where: {
        email: email,
      },
    });

    if (checkEmailExist) {
      return {
        status: 400,
        message: "Email already exists",
      };
    }

    let base64Avatar = null;
    if (avatar) {
      // Chuyển đổi avatar thành base64 nếu nó tồn tại
      base64Avatar = avatar.toString("base64");
    }

    const user = await db.User.create({
      email,
      password,
      username,
      address,
      phone,
      role,
      avatar: base64Avatar, // Lưu base64Avatar vào cơ sở dữ liệu
    });
    console.log("user", user);
    if (user) {
      return {
        status: 200,
        message: "User created successfully",
        data: user,
      };
    } else {
      return {
        status: 500,
        message: "Failed to create user",
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: "An error occurred",
      error: error.message,
    };
  }
};

const updateUserService = async (userId, dataUser) => {
  try {
    const user = await db.User.findByPk(userId);
    if (!user) {
      return null;
    }
    await user.update(dataUser);
    return user;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

const deleteUserService = async (userId) => {
  try {
    const user = await db.User.findByPk(userId);
    if (!user) {
      return false;
    }
    await user.destroy(); // Xóa user khỏi cơ sở dữ liệu
    return true;
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

const handleRegister = async (email, userName, phone, address, password) => {
  try {
    const existingUser = await db.User.findOne({ where: { email: email } });
    if (existingUser) {
      return { message: "User already exists" };
    }
    const newUser = await db.User.create({
      email: email,
      username: userName,
      phone: phone,
      address: address,
      password: password,
      role: "user",
    });
    return {
      message: "User registered successfully",
      user: newUser,
    };
  } catch (error) {
    console.error("Error during user registration:", error);
  }
};

const handleLogin = async (email, password) => {
  try {
    let login = await db.User.findOne({
      where: { email: email, password: password },
    });
    return login;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
  updateUserService,
  deleteUserService,
  getAllUser,
  getUserById,
  handleRegister,
  handleLogin,
};
