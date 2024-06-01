import express from "express";
import apiCartController from "../controller/apiCartController";

const router = express.Router();
router.get("/get-all-cart", apiCartController.getAllCart);
router.get("/get-cart-by-id/:id", apiCartController.getAllCartById);
router.post("/craete-cart", apiCartController.createCart);
router.put("/update-cart/:id", apiCartController.updateCart);
router.delete("/delete-cart/:id", apiCartController.deleteCart);

export default router;
