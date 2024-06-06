import apiUserService from "../service/apiUserService";

const getPage = (req, res) => {
  const page = parseInt(req.query.page);
  const pageSize = parseInt(req.query.pageSize);
  console.log("check: ", page, pageSize);
};

const getAllUser = async (req, res) => {
  try {
    let getAllUser = await apiUserService.getAllUser();
    if (getAllUser) {
      return res.status(200).json({
        message: "Show All User Success",
        errcode: 0,
        data: getAllUser,
      });
    } else {
      return res.status(200).json({
        message: "Show All User Failed",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Show All User Error",
      errcode: -1,
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
        errcode: 0,
        data: user,
      });
    } else {
      return res.status(200).json({
        message: "Show All User Failed",
        errcode: 1,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Show All User Error",
      errcode: -1,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const avatar = req.file; // Di chuyển đây để đảm bảo bạn truy cập req.file sau khi Multer đã xử lý

    let { email, password, username, address, phone, role } = req.body;

    var emailRegex =
      /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    let checkEmail = emailRegex.test(email);

    if (!email || !password || !username || !address || !phone || !role) {
      return res
        .status(200)
        .json({ message: "All input fields are required", errcode: 1 });
    }

    if (!checkEmail) {
      return res
        .status(200)
        .json({ message: "Invalid email format", errcode: 1 });
    }

    let createUser = await apiUserService.createUser(
      email,
      password,
      username,
      address,
      phone,
      role,
      req.body.base64Image
    );

    console.log("check", email, password, username, address, phone, role);

    if (createUser && createUser.status === 200) {
      return res.status(200).json({
        message: "User created successfully",
        errcode: 0,
        data: createUser.data,
      });
    } else {
      return res.status(200).json({
        message: createUser.message,
        errcode: 1,
        data: createUser.data,
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Failed to create user.", errcode: -1 });
  }
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const dataUser = req.body;
  console.log("data user:", dataUser);

  try {
    const updatedUser = await apiUserService.updateUserService(
      userId,
      dataUser
    );
    if (updatedUser) {
      res.status(200).json({
        message: "Update User Successs",
        errcode: 0,
        data: updatedUser,
      });
    } else {
      res.status(404).json({ message: "User not found", errcode: 1 });
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Update User Failed", errcode: -1 });
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  console.log(userId);

  if (!userId) {
    return res.status(400).json({ message: "User ID is required", errcode: 1 });
  }

  try {
    const result = await apiUserService.deleteUserService(userId);
    if (result) {
      res
        .status(200)
        .json({ message: "User deleted successfully", errcode: 0 });
    } else {
      res.status(404).json({ message: "User not found", errcode: 1 });
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Delete User Failed", errcode: -1 });
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
        errcode: 1,
      });
    } else if (!checkEmail) {
      return res
        .status(200)
        .json({ message: "The input is email required", errcode: 1 });
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
        errcode: 0,
        user: register,
      });
    } else {
      return res.status(400).json({
        message: register.message,
        errcode: 1,
      });
    }
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({
      message: "Registration error",
      errcode: -1,
    });
  }
};

const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(200).json({
        message: "The input is required",
        errcode: 1,
      });
    }
    let login = await apiUserService.handleLogin(email, password);
    console.log("login", login);

    if (login !== null) {
      return res.status(200).json({
        message: "Login The Success",
        errcode: 0,
        data: login.login,
        access_tokens: login.accessToken,
        refresh_tokens: login.refreshToken,
      });
    } else {
      return res.status(200).json({
        message: "Login The Error",
        errcode: 0,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Login The Error",
      errcode: -1,
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
  getPage,
};
