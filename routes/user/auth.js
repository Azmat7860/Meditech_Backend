import express from "express";
import authValidation from "../../validations/user.validation.js";
import validate from "../../middlewares/validate.js";
import controller from "./controller.js";

const router = express.Router();
router.post("/register", validate(authValidation.register), controller.register);
// router.post("/forgetpassword", validate(authValidation.forgetPassword), controller.forgetpassword);
router.post("/login", validate(authValidation.login), controller.login);

export default router;
