import Home from "../pages/Home/home";
import User from "../pages/Home/user";
import TypeProductPage from "../pages/Home/TypeProductPage/TypeProductPage";
import ProductDetail from "../pages/Home/ProductDetail/ProductDetail";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
export const routers = [
  { path: "/", page: Home, isShowHeader: true },
  { path: "/users", page: User, isShowHeader: false },
  { path: "/type", page: TypeProductPage, isShowHeader: true },
  { path: "/product-detail", page: ProductDetail, isShowHeader: true },
  { path: "/sign-in", page: SignInPage, isShowHeader: false },
  { path: "/sign-up", page: SignUpPage, isShowHeader: false },
  { path: "*", page: NotFoundPage, isShowHeader: false },
];
