const db = require("../models/index");
require("dotenv").config();
const jwt = require("jsonwebtoken");
import { Op } from "sequelize";
const fetchPaginatedUsers = async (page, pageSize, username) => {
  try {
    const totalUser = await db.User.count();
    const listUser = await db.User.findAll({
      limit: pageSize,
      offset: (page - 1) * pageSize,
    });
    const total = Math.ceil(totalUser / pageSize);
    return { totalItems: total, data: listUser };
  } catch (error) {
    console.error("Error fetching paginated users:", error);
    throw error;
  }
};

const findByName = async (username) => {
  try {
    const data = await db.User.findAll({
      where: {
        username: {
          [Op.like]: `%${username}%`,
        },
      },
    });
    if (!data) {
      return null;
    }
    return data;
  } catch (error) {
    console.log(e);
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

const createUser = async ({
  email,
  password,
  username,
  address,
  phone,
  role,
  avatar,
}) => {
  try {
    const emailExists = await db.User.findOne({ where: { email } });
    if (emailExists) {
      return {
        status: 400,
        message: "Email already exists",
      };
    }

    const user = await db.User.create({
      email,
      password,
      username,
      address,
      phone,
      role,
      avatar,
    });

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
    user.email = email;
    user.password = password;
    user.username = username;
    user.address = address;
    user.phone = phone;
    user.role = role;
    if (avatar) {
      user.avatar = avatar;
    }

    await user.save();

    console.log("User: ", user);
    return user;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

const deleteUserService = async (userId, role) => {
  try {
    const user = await db.User.findOne({
      where: {
        id: userId,
        role: role,
      },
    });

    if (!user) {
      return false;
    }

    await user.destroy();
    return true;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
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
        { id: login.id, role: login.role },
        accessTokenSecret,
        { expiresIn: "1h" }
      );

      const refreshToken = jwt.sign(
        { id: login.id, role: login.role },
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
  fetchPaginatedUsers,
  createUser,
  updateUserService,
  deleteUserService,
  getAllUser,
  getUserById,
  handleRegister,
  handleLogin,
  findByName,
};
