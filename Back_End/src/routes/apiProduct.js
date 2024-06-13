import express from "express";
import { upload, uploadImage } from "../config/configUploadFile";
import apiProductController from "../controller/apiProductController";

const router = express.Router();
router.get("/get-all-product", apiProductController.getAllProducts);
router.get("/get-product-by-id/:id", apiProductController.getAllProductById);
router.post(
  "/craete-product",
  upload.single("img_book"),
  uploadImage,
  apiProductController.createProduct
);
router.put(
  "/update-product/:id",
  upload.single("img_book"),
  uploadImage,
  apiProductController.updateProduct
);
router.delete("/delete-product/:id", apiProductController.deleteProduct);

export default router;
