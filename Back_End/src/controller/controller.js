import service from "../service/service";

const handleHelloWord = (req, res) => {
  return res.render("home.ejs");
};

const handleUserPage = async (req, res) => {
  let userList = await service.getUserPage();
  return res.render("user.ejs", { userList });
};

module.exports = {
  handleHelloWord,
  handleUserPage,
};
