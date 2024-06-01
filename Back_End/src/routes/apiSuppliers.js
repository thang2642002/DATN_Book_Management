import express from "express";
import apiSuppliersController from "../controller/apiSuppliersController";
const router = express.Router();

router.post(
  "/get-suppliers-by-name",
  apiSuppliersController.getSuppliersByName
);
router.get("/get-suppliers-by-id/:id", apiSuppliersController.getSuppliersById);
router.get("/get-all-suppliers", apiSuppliersController.getAllSuppliers);
router.post("/create-suppliers", apiSuppliersController.createSuppliers);
router.put("/update-suppliers/:id", apiSuppliersController.updateSuppliers);
router.delete("/delete-suppliers/:id", apiSuppliersController.deleteSuppliers);

export default router;
