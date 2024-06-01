import express from "express";
import apiOrderDetailController from "../controller/apiOrderDetailsController";

const router = express.Router();
router.get(
  "/get-all-orderDetails",
  apiOrderDetailController.getAllOrderDetails
);
router.get(
  "/get-orderDetails-by-id/:id",
  apiOrderDetailController.getAllOrderDetailsById
);
router.post(
  "/craete-orderDetails",
  apiOrderDetailController.createOrderDetails
);
router.put(
  "/update-orderDetails/:id",
  apiOrderDetailController.updateOrderDetails
);
router.delete(
  "/delete-orderDetails/:id",
  apiOrderDetailController.deleteOrderDetails
);

export default router;
