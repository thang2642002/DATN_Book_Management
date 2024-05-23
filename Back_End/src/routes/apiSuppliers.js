import express from "express";
import apiSuppliersController from "../controller/apiSuppliersController";
const router = express.Router();

router.post("/create-suppliers", apiSuppliersController.createSuppliers);

export default router;
