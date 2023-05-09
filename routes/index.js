import express from "express";

// routes
import userRoute from "./user/index.js";
import authRoute from "./user/auth.js";
import doctorRoute from "./doctor/index.js";
import doctorAuthRoute from "./doctor/auth.js";
import caretakerRoute from "./caretaker/index.js";
import caretakerAuthRoute from "./caretaker/auth.js";


const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes
protectedRouter.use("/user", userRoute);
protectedRouter.use("/doctor", doctorRoute);
protectedRouter.use("/caretaker", caretakerRoute);

// Un-Protected Routes
unProtectedRouter.use("/auth", authRoute);
unProtectedRouter.use("/doctorAuth", doctorAuthRoute);
unProtectedRouter.use("/caretakerAuth", caretakerAuthRoute);

export { protectedRouter, unProtectedRouter };
