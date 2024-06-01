import express from "express";
import apiTransactionController from "../controller/apiTransactionController";

const router = express.Router();
router.get("/get-all-transaction", apiTransactionController.getAllTransactions);
router.get(
  "/get-transaction-by-id/:id",
  apiTransactionController.getTransactionById
);
router.post("/create-transaction", apiTransactionController.createTransaction);
router.put(
  "/update-transaction/:id",
  apiTransactionController.updateTransaction
);
router.delete(
  "/delete-transaction/:id",
  apiTransactionController.deleteTransaction
);

export default router;
