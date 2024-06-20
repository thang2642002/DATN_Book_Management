import express from "express";
import apiSuppliersController from "../controller/apiSuppliersController";
const router = express.Router();
// router.post(
//   "/get-suppliers-by-name",
//   apiSuppliersController.getSuppliersByName
// );
router.get("/get-page", apiSuppliersController.getPaginatedSuppliers);
router.get("/get-suppliers-by-id/:id", apiSuppliersController.getSupplierById);
router.get("/get-all-suppliers", apiSuppliersController.getAllSuppliers);
router.post("/create-suppliers", apiSuppliersController.createSupplier);
router.put("/update-suppliers/:id", apiSuppliersController.updateSupplier);
router.delete("/delete-suppliers/:id", apiSuppliersController.deleteSupplier);

export default router;
