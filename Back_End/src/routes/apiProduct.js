import express from "express";
import apiProductController from "../controller/apiProductController";

const router = express.Router();
router.get("/get-all-product", apiProductController.getAllProducts);
router.get("/get-product-by-id/:id", apiProductController.getAllProductById);
router.post("/craete-product", apiProductController.createProduct);
router.put("/update-product/:id", apiProductController.updateProduct);
router.delete("/delete-product/:id", apiProductController.deleteProduct);

export default router;
