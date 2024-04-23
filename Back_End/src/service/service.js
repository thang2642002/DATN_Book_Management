import db from "../models/index";
const getUserPage = async () => {
  let user = [];
  user = await db.User.findAll();
  return user;
};

module.exports = {
  getUserPage,
};
