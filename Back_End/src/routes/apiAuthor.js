import express from "express";
import apiAuthorController from "../controller/apiAuthorController";

const router = express.Router();
router.get("/get-page", apiAuthorController.getPaginatedAuthor);
router.get("/get-all-author", apiAuthorController.getAllAuthors);
router.get("/get-author-by-id/:id", apiAuthorController.getAllAuthorById);
router.post("/craete-author", apiAuthorController.createAuthor);
router.put("/update-author/:id", apiAuthorController.updateAuthor);
router.delete("/delete-author/:id", apiAuthorController.deleteAuthor);

export default router;
