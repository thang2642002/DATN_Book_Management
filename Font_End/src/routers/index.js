import Home from "../pages/Home/home";
import Admin from "../pages/Home/admin";
import User from "../pages/Home/user";
export const routers = [
  { path: "/", page: Home, isShowHeader: true },
  { path: "/admin", page: Admin, isShowHeader: false },
  { path: "/users", page: User, isShowHeader: false },
];
