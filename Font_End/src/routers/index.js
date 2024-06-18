// src/routers/index.js
import DefaultHeader from "../components/DefaultHeader/DefaultHeader";
import Home from "../pages/Home/home";
import TypeProductPage from "../pages/Home/TypeProductPage/TypeProductPage";
import ProductDetail from "../pages/Home/ProductDetail/ProductDetail";
import Carts from "../pages/Home/Carts/Carts";
import InfoUser from "../pages/Home/InfoUser/InfoUser";
import Payment from "../pages/Home/Payment/Payment";
import OrderDetails from "../pages/Home/OrderDetails/OrderDetails";
//import router root
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import User from "../pages/Home/user";

// import router Admin
import Admin from "../pages/Admin/Admin";
import Dashboard from "../pages/Admin/Contents/Dashboard";
import ManagerUser from "../pages/Admin/Contents/ManagerUser";
import ManagerBooks from "../pages/Admin/Contents/ManagerBooks";
import ManagerGenres from "../pages/Admin/Contents/ManagerGenres";
import ManagerAuthor from "../pages/Admin/Contents/ManagerAuthor";
import ManagerPubliers from "../pages/Admin/Contents/ManagerPubliers";
import ManagerCarts from "../pages/Admin/Contents/ManagerCarts";
import ManagerTransaction from "../pages/Admin/Contents/ManagerTransaction";
import ManagerPayment from "../pages/Admin/Contents/ManagerPayment";
import ManagerOrder from "../pages/Admin/Contents/ManagerOrder";
import ManagerOrderDetails from "../pages/Admin/Contents/ManagerOrderDetails";
import ManagerReview from "../pages/Admin/Contents/ManagerReview";

export const routers = [
  {
    path: "/",
    element: <DefaultHeader />,
    children: [
      { path: "", element: <Home /> },
      { path: "type", element: <TypeProductPage /> },
      {
        path: "product-detail/:id",
        element: <ProductDetail />,
        isShowHeader: true,
      },
      { path: "carts", element: <Carts /> },
      { path: "info-user", element: <InfoUser /> },
      { path: "order-details", element: <OrderDetails /> },
      { path: "payment", element: <Payment /> },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      { path: "Dashboard", element: <Dashboard /> },
      { path: "managerUsers", element: <ManagerUser /> },
      { path: "managerGenres", element: <ManagerGenres /> },
      { path: "managerBooks", element: <ManagerBooks /> },
      { path: "managerAuthors", element: <ManagerAuthor /> },
      { path: "managerPubliers", element: <ManagerPubliers /> },
      // { path: "managerCarts", element: <ManagerCarts /> },
      // { path: "managerTransactions", element: <ManagerTransaction /> },
      // { path: "managerPayments", element: <ManagerPayment /> },
      { path: "managerOrder", element: <ManagerOrder /> },
      // { path: "managerOrderDetails", element: <ManagerOrderDetails /> },
      { path: "managerReviews", element: <ManagerReview /> },
      // Add more admin routes here
    ],
  },

  { path: "*", element: <NotFoundPage /> },
  { path: "/users", element: <User /> },
  { path: "/sign-in", element: <SignInPage /> },
  { path: "/sign-up", element: <SignUpPage /> },
];
