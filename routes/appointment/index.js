import express from "express";
import appointmentValidation from "../../validations/appointment.validation.js";
import validate from "../../middlewares/validate.js";
import controller from "./controller.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.get("/",  controller.getAll);
router.post("/",  validate(appointmentValidation.add), controller.add);
router.get("/appointments", controller.getDoctor);
router.get("/:id/appointment", controller.getAppointmentByDoctorId);
router.get("/:id", authenticate,  validate(appointmentValidation.id), controller.getOne);
router.patch('/:id', authenticate, validate(appointmentValidation.update), controller.update);
router.delete('/:id', authenticate, validate(appointmentValidation.id),  controller.delete);

export default router;
