import express from "express";
import apiPaymentController from "../controller/apiPaymentController";

const router = express.Router();
router.get("/get-all-payment", apiPaymentController.getAllPayment);
router.get("/get-payment-by-id/:id", apiPaymentController.getAllPaymentById);
router.post("/craete-payment", apiPaymentController.createPayment);
router.put("/update-payment/:id", apiPaymentController.updatePayment);
router.delete("/delete-payment/:id", apiPaymentController.deletePayment);

export default router;
