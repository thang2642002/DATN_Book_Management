import express from "express";
import uploadCloud from "../config/cloudinary.config";
import apiGenresController from "../controller/apiGenresController";

const router = express.Router();
router.get("/get-page", apiGenresController.getPaginatedGenres);
router.get("/get-name-genres", apiGenresController.getNameGenres);
router.get("/get-all-genres", apiGenresController.getAllGenres);
router.get("/get-genres-by-id/:id", apiGenresController.getGenresById);
router.post(
  "/create-genres",
  uploadCloud.single("img_genres"),
  apiGenresController.createGenres
);
router.put(
  "/update-genres/:id",
  uploadCloud.single("img_genres"),
  apiGenresController.UpdateGenres
);
router.delete("/delete-genres/:id", apiGenresController.deleteGenres);

export default router;
