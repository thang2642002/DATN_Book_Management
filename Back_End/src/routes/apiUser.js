import { upload, uploadImage } from "../config/configUploadFile";
import apiUserController from "../controller/apiUserController";
import express from "express";
import uploadCloud from "../config/cloudinary.config";

const router = express.Router();
router.get("/findByUserName", apiUserController.findByName);
router.get("/get-page", apiUserController.getPaginatedUsers);
router.get("/get-all-user", apiUserController.getAllUser);
router.get("/get-user-by-id/:id", apiUserController.getUserById);

router.post(
  "/create-user",
  uploadCloud.single("avatar"),
  apiUserController.createUser
);
router.put(
  "/update-user/:id",
  uploadCloud.single("avatar"),
  apiUserController.updateUser
);
router.delete("/delete-user/:id", apiUserController.deleteUser);
router.post("/register", apiUserController.handleRegister);
router.post("/login", apiUserController.handleLogin);
router.post("/logout", apiUserController.handleLogout);

export default router;
