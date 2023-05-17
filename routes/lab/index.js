import express from "express";
import labValidation from "../../validations/lab.validation.js";
import validate from "../../middlewares/validate.js";
import controller from "./controller.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.get("/", authenticate, controller.getAll);
router.get("/:id",  validate(labValidation.id), controller.getOne);
router.patch('/:id', authenticate,  validate(labValidation.update), controller.update);
router.delete('/:id', authenticate, validate(labValidation.id),  controller.delete);

export default router;
