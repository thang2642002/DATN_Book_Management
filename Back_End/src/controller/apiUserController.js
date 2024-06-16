import apiUserService from "../service/apiUserService";

const getPaginatedUsers = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  const username = req.query.username;
  console.log("username", username);
  try {
    const { totalItems, data } = await apiUserService.fetchPaginatedUsers(
      page,
      pageSize,
      username
    );
    res.status(200).json({
      message: "PaginatedUsers success",
      errcode: 0,
      data: data,
      totalItems: totalItems,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      message: "PaginatedUsers error",
      errcode: -1,
    });
  }
};

const findByName = async (req, res) => {
  const { username } = req.query;
  console.log("check user name:", username);

  try {
    const data = await apiUserService.findByName(username);
    if (data) {
      return res.status(200).json({
        message: "Find Name is the success",
        errCode: 0,
        data: data,
      });
    } else {
      return res.status(200).json({
        message: "Find Name is the faild",
        errCode: 1,
        data: data,
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "Find Name is the error",
      errCode: -1,
    });
  }
};

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

// const createUser = async (req, res) => {
//   try {
//     const avatar = req.file; // Di chuyển đây để đảm bảo bạn truy cập req.file sau khi Multer đã xử lý

//     let { email, password, username, address, phone, role } = req.body;

//     var emailRegex =
//       /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
//     let checkEmail = emailRegex.test(email);

//     if (!email || !password || !username || !address || !phone || !role) {
//       return res
//         .status(200)
//         .json({ message: "All input fields are required", errcode: 1 });
//     }

//     if (!checkEmail) {
//       return res
//         .status(200)
//         .json({ message: "Invalid email format", errcode: 1 });
//     }

//     let createUser = await apiUserService.createUser(
//       email,
//       password,
//       username,
//       address,
//       phone,
//       role,
//       req.body.base64Image
//     );
//     console.log(" check user", createUser);

//     console.log("check", email, password, username, address, phone, role);

//     if (createUser && createUser.status === 200) {
//       return res.status(200).json({
//         message: "User created successfully",
//         errcode: 0,
//         data: createUser.data,
//       });
//     } else {
//       return res.status(200).json({
//         message: createUser.message,
//         errcode: 1,
//         data: createUser.data,
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     return res
//       .status(500)
//       .json({ message: "Failed to create user.", errcode: -1 });
//   }
// };

const createUser = async (req, res) => {
  try {
    const { email, password, username, address, phone, role } = req.body;
    const avatar = req.file;

    const createUserResult = await apiUserService.createUser({
      email,
      password,
      username,
      address,
      phone,
      role,
      avatar,
    });
    if (createUserResult.status === 200) {
      return res.status(200).json({
        message: "User created successfully",
        errcode: 0,
        data: createUserResult.data,
      });
    } else {
      return res.status(500).json({
        message: createUserResult.message || "Failed to create user",
        errcode: 1,
        data: createUserResult.data,
      });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return res
      .status(500)
      .json({ message: "Failed to create user", errcode: -1 });
  }
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const avatar = req.file;
  let { email, password, username, address, phone, role } = req.body;
  console.log("check data", req.body);
  try {
    const updatedUser = await apiUserService.updateUserService(
      userId,
      email,
      password,
      username,
      address,
      phone,
      role,
      req.body.base64Image
    );
    if (updatedUser) {
      res.status(200).json({
        message: "Update User Successs",
        errcode: 0,
        data: updatedUser,
      });
      console.log("updatedUser", updateUser);
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

    res.cookie("accessToken", login.accessToken, {
      httpOnly: true,
      secure: true,
      maxAge: 3600000,
    });

    res.cookie("refreshToken", login.refreshToken, {
      httpOnly: true,
      secure: true,
      maxAge: 604800000,
    });

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
        message: "Login The faild",
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

const handleLogout = (req, res) => {
  try {
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Logout failed" });
  }
};

module.exports = {
  getPaginatedUsers,
  findByName,
  createUser,
  updateUser,
  deleteUser,
  getAllUser,
  getUserById,
  handleRegister,
  handleLogin,
  getPage,
  handleLogout,
};
