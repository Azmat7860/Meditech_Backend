import express from "express";
import MedicineValidation from "../../validations/medicine.validation.js";
import validate from "../../middlewares/validate.js";
import controller from "./controller.js";
import authenticate from "../../middlewares/authenticate.js";
import upload from "../../middlewares/multer.js";

const router = express.Router();
router.get("/",  controller.getAll);
router.post("/",  upload.single("medicine_image"), validate(MedicineValidation.add), controller.add);
router.get("/:id", authenticate, validate(MedicineValidation.id), controller.getOne);
router.patch("/:id", authenticate, upload.single("image"), validate(MedicineValidation.update), controller.update);
router.delete("/:id", authenticate, validate(MedicineValidation.id), controller.delete);

export default router;
