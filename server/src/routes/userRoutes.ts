import { Router } from "express";
import * as userController from "../controllers/userController";

const router = Router();

router.post("/register", userController.register);
router.post("/login-user", userController.loginUser);
router.post("/userData", userController.userData);
router.post("/deleteUser", userController.deleteUser);

export default router;
