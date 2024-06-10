const db = require("../models/index");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const getPaginatedUsers = async (page, pageSize) => {
  const limit = pageSize;
  //10
  const offset = (page - 1) * pageSize;
  //40

  try {
    const { count, rows } = await User.findAndCountAll({
      limit: limit,
      offset: offset,
    });
    console.log("count: ", count);
    console.log("rows: ", rows);
    return { totalItems: count, data: rows };
  } catch (error) {
    console.error("Error fetching paginated users:", error);
    throw error;
  }
};

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

const updateUserService = async (
  userId,
  email,
  password,
  username,
  address,
  phone,
  role,
  avatar
) => {
  try {
    const user = await db.User.findByPk(userId);
    if (!user) {
      return null;
    }
    console.log("user", user);
    await user.update(
      userId,
      email,
      password,
      username,
      address,
      phone,
      role,
      avatar
    );
    console.log("User: ", user);
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

const accessTokenSecret = process.env.ACCESS_TOKENS;
const refreshTokenSecret = process.env.REFRESH_TOKENS;
console.log("accessTokenSecret", refreshTokenSecret);
console.log("accessTokenSecret", accessTokenSecret);
const handleLogin = async (email, password) => {
  try {
    let login = await db.User.findOne({
      where: { email: email, password: password },
    });
    if (login) {
      const accessToken = jwt.sign(
        { id: login.id, email: login.email },
        accessTokenSecret,
        { expiresIn: "1h" }
      );

      const refreshToken = jwt.sign(
        { id: login.id, email: login.email },
        refreshTokenSecret,
        { expiresIn: "7d" }
      );

      console.log("first", accessToken, refreshToken);
      return { login, accessToken, refreshToken };
    }
  } catch (e) {
    console.log(e);
  }
};
module.exports = {
  getPaginatedUsers,
  createUser,
  updateUserService,
  deleteUserService,
  getAllUser,
  getUserById,
  handleRegister,
  handleLogin,
};
