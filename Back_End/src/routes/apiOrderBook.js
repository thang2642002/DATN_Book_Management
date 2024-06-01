import express from "express";
import apiOrderController from "../controller/apiOrderController";

const router = express.Router();
router.get("/get-all-order", apiOrderController.getAllOrderBooks);
router.get("/get-order-by-id/:id", apiOrderController.getOrderBookById);
router.post("/create-order", apiOrderController.createOrderBook);
router.put("/update-order/:id", apiOrderController.updateOrderBook);
router.delete("/delete-order/:id", apiOrderController.deleteOrderBook);

export default router;
