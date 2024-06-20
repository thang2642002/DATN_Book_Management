import express from "express";
import apiGenresController from "../controller/apiGenresController";

const router = express.Router();
router.get("/get-page", apiGenresController.getPaginatedGenres);
router.get("/get-name-genres", apiGenresController.getNameGenres);
router.get("/get-all-genres", apiGenresController.getAllGenres);
router.get("/get-genres-by-id/:id", apiGenresController.getGenresById);
router.post("/create-genres", apiGenresController.createGenres);
router.put("/update-genres/:id", apiGenresController.UpdateGenres);
router.delete("/delete-genres/:id", apiGenresController.deleteGenres);

export default router;
