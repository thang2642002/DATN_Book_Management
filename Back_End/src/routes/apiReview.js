import express from "express";
import apiReviewController from "../controller/apiReviewController";

const router = express.Router();
router.get("/get-page", apiReviewController.getPaginatedReview);
router.get("/get-all-review", apiReviewController.getAllReviews);
router.get("/get-review-by-id/:id", apiReviewController.getReviewById);
router.post("/create-review", apiReviewController.createReview);
router.put("/update-review/:id", apiReviewController.updateReview);
router.delete("/delete-review/:id", apiReviewController.deleteReview);

export default router;
