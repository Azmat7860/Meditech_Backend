import express from "express";
import blogValidation from "../../validations/blog.validation.js";
import validate from "../../middlewares/validate.js";
import controller from "./controller.js";
import authenticate from "../../middlewares/authenticate.js";
import upload from "../../middlewares/multer.js";

const router = express.Router();
router.get("/",  controller.getAll);
router.get("/:id", authenticate, validate(blogValidation.id), controller.getOne);
router.post("/",  upload.single("blog_image"), validate(blogValidation.add), controller.add);
router.delete("/:id", authenticate, validate(blogValidation.id), controller.delete);
router.patch("/:id", authenticate, upload.single("image"), validate(blogValidation.update), controller.update);

export default router;
