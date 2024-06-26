import express from "express";
import apiCartItemController from "../controller/apiCartItemController";

const router = express.Router();
router.get("/get-all-cart-item", apiCartItemController.getAllCartItem);
router.delete(
  "/delete-cart-item/:cartId/:bookId",
  apiCartItemController.deleteCartItem
);
router.put("/update-cart-item/:id", apiCartItemController.updateCartItem);

export default router;
