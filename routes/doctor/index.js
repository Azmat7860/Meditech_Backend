import express from "express";
import doctorValidation from "../../validations/doctor.validation.js";
import validate from "../../middlewares/validate.js";
import controller from "./controller.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.get("/", authenticate, controller.getAll);
router.patch('/:id', authenticate,  validate(doctorValidation.update), controller.update);
router.delete('/:id', authenticate, validate(doctorValidation.id),  controller.delete);

export default router;
