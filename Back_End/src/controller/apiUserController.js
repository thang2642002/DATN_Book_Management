import apiUserService from "../service/apiUserService";

const getAllUser = async (req, res) => {
  try {
    let getAllUser = await apiUserService.getAllUser();
    if (getAllUser) {
      return res.status(200).json({
        message: "Show All User Success",
        data: getAllUser,
      });
    } else {
      return res.status(200).json({
        message: "Show All User Failed",
        data: [],
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Show All User Error",
    });
  }
};

const getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await apiUserService.getUserById(userId);
    if (user) {
      return res.status(200).json({
        message: "Show All User Success",
        data: user,
      });
    } else {
      return res.status(200).json({
        message: "Show All User Failed",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Show All User Error",
    });
  }
};

const createUser = async (req, res) => {
  let { email, password, username, address, phone, role } = req.body;
  var emailRegex =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  let checkEmail = emailRegex.test(email);
  console.log("check email,", checkEmail);
  try {
    if (!email || !password || !username || !address || !phone || !role) {
      return res.status(200).json({ message: "The input is required" });
    } else if (!checkEmail) {
      return res.status(200).json({ message: "The input is email required" });
    } else {
      let createUser = await apiUserService.createUser(
        email,
        password,
        username,
        address,
        phone,
        role
      );
      return res.status(200).json({ createUser });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Failed to create user." });
  }
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const dataUser = req.body;

  try {
    const updatedUser = await apiUserService.updateUserService(
      userId,
      dataUser
    );
    if (updatedUser) {
      res.status(200).json({
        message: "Update User Successs",
        data: updatedUser,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Update User Failed" });
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  console.log(userId);

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const result = await apiUserService.deleteUserService(userId);
    if (result) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Delete User Failed" });
  }
};

const handleRegister = async (req, res) => {
  const { email, userName, phone, address, password } = req.body;

  var emailRegex =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  let checkEmail = emailRegex.test(email);
  try {
    if (!email || !userName || !phone || !address || !password) {
      return res.status(200).json({
        message: "All input fields are required",
      });
    } else if (!checkEmail) {
      return res.status(200).json({ message: "The input is email required" });
    }
    const register = await apiUserService.handleRegister(
      email,
      userName,
      phone,
      address,
      password
    );
    if (register) {
      return res.status(200).json({
        message: "Registration successful",
        user: register,
      });
    } else {
      return res.status(400).json({
        message: register.message,
      });
    }
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({
      message: "Registration error",
    });
  }
};

const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(200).json({
        message: "The input is required",
      });
    }
    let login = await apiUserService.handleLogin(email, password);
    if (login !== null) {
      return res.status(200).json({
        message: "Login The Success",
        data: login,
      });
    } else {
      return res.status(200).json({
        message: "Login The Error",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Login The Error",
    });
  }
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getAllUser,
  getUserById,
  handleRegister,
  handleLogin,
};
