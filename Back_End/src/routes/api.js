import express from "express";
import controller from "../controller/controller";

const router = express.Router();

/**
 *
 * @param {*} app : express app
 */

const apiWebRoutes = (app) => {
  //path, handler
  router.get("/", controller.handleHelloWord);
  router.get("/user", controller.handleUserPage);

  return app.use("/", router);
};

export default apiWebRoutes;
