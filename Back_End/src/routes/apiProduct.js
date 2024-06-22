import express from "express";
import { upload, uploadImage } from "../config/configUploadFile";
import apiProductController from "../controller/apiProductController";
import uploadCloud from "../config/cloudinary.config";

const router = express.Router();
router.get("/get-product-by-price", apiProductController.getByPriceProduct);
router.get(
  "/get-product-name/:productName",
  apiProductController.getNameProduct
);
router.get("/get-page", apiProductController.getPaginatedProduct);
router.get("/get-all-product", apiProductController.getAllProducts);
router.get("/get-product-by-id/:id", apiProductController.getAllProductById);
router.post(
  "/craete-product",
  uploadCloud.single("img_book"),
  apiProductController.createProduct
);
router.put(
  "/update-product/:id",
  uploadCloud.single("img_book"),
  apiProductController.updateProduct
);
router.delete("/delete-product/:id", apiProductController.deleteProduct);
router.get(
  "/recommendation/authors_genres/:bookId",
  apiProductController.recommendAuthorsAndGenres
);

export default router;
