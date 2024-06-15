import apiUser from "./apiUser";
import apiProduct from "./apiProduct";
import apiGenres from "./apiGenres";
import apiAuthor from "./apiAuthor";
import apiSuppliers from "./apiSuppliers";
import apiReview from "./apiReview";
import apiOrderBook from "./apiOrderBook";
import apiTransaction from "./apiTransaction";
import apiPayment from "./apiPayment";
import apiCarts from "./apiCarts";
import apiOrderDetails from "./apiOrderDetails";
import apiCartItem from "./apiCartItem";
import apiPayPall from "./apiPayPall";

const apiWebRoutes = (app) => {
  app.use("/api/users", apiUser);
  app.use("/api/products", apiProduct);
  app.use("/api/genres", apiGenres);
  app.use("/api/author", apiAuthor);
  app.use("/api/suppliers", apiSuppliers);
  app.use("/api/review", apiReview);
  app.use("/api/orderbook", apiOrderBook);
  app.use("/api/transaction", apiTransaction);
  app.use("/api/payment", apiPayment);
  app.use("/api/cart", apiCarts);
  app.use("/api/cart-item", apiCartItem);
  app.use("/api/orderdetails", apiOrderDetails);
  app.use("/api/paypall", apiPayPall);
};

export default apiWebRoutes;
