import express from "express";
import medicalstoreValidation from "../../validations/medicalStore.validation.js";
import validate from "../../middlewares/validate.js";
import controller from "./controller.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.get("/", authenticate, controller.getAll);
router.patch('/:id', authenticate,  validate(medicalstoreValidation.update), controller.update);
router.delete('/:id', authenticate, validate(medicalstoreValidation.id),  controller.delete);

export default router;
