import { upload, uploadImage } from "../config/configUploadFile";
import apiUserController from "../controller/apiUserController";
import express from "express";

const router = express.Router();

router.get("/get-all-user", apiUserController.getAllUser);
router.get("/get-user-by-id/:id", apiUserController.getUserById);
router.post(
  "/create-user",
  upload.single("avatar"),
  uploadImage,
  apiUserController.createUser
);
router.put("/update-user/:id", apiUserController.updateUser);
router.delete("/delete-user/:id", apiUserController.deleteUser);
router.post("/register", apiUserController.handleRegister);
router.post("/login", apiUserController.handleLogin);

export default router;
