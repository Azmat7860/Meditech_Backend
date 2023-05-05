import express from "express";
import authValidation from "../../validations/user.validation.js";
import validate from "../../middlewares/validate.js";
import controller from "./controller.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.get("/", authenticate, controller.getAll);
router.patch('/:id', authenticate,  validate(authValidation.update), controller.update);
router.delete('/:id', authenticate, validate(authValidation.id),  controller.delete);

export default router;
