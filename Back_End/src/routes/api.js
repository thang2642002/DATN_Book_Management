import apiUser from "./apiUser";
import apiProduct from "./apiProduct";
import apiGenres from "./apiGenres";
import apiAuthor from "./apiAuthor";
import apiSuppliers from "./apiSuppliers";

const apiWebRoutes = (app) => {
  app.use("/api/users", apiUser);
  app.use("/api/products", apiProduct);
  app.use("/api/genres", apiGenres);
  app.use("/api/author", apiAuthor);
  app.use("/api/suppliers", apiSuppliers);
};

export default apiWebRoutes;
