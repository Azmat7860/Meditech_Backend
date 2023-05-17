import express from "express";
import caretakerValidation from "../../validations/caretaker.validation.js";
import validate from "../../middlewares/validate.js";
import controller from "./controller.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.get("/",  controller.getAll);
router.get("/:id",  validate(caretakerValidation.id), controller.getOne);
router.patch('/:id', authenticate,  validate(caretakerValidation.update), controller.update);
router.delete('/:id', authenticate, validate(caretakerValidation.id),  controller.delete);

export default router;
