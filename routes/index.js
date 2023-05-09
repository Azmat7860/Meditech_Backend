import express from "express";

// routes
import userRoute from "./user/index.js";
import authRoute from "./user/auth.js";
import doctorRoute from "./doctor/index.js";
import doctorAuthRoute from "./doctor/auth.js";
import caretakerRoute from "./caretaker/index.js";
import caretakerAuthRoute from "./caretaker/auth.js";
import labRoute from "./lab/index.js";
import labAuthRoute from "./lab/auth.js";
import medicalStoreRoute from "./medicalStore/index.js";
import medicalStoreAuthRoute from "./medicalStore/auth.js";


const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes
protectedRouter.use("/user", userRoute);
protectedRouter.use("/doctor", doctorRoute);
protectedRouter.use("/caretaker", caretakerRoute);
protectedRouter.use("/lab", labRoute);
protectedRouter.use("/medicalStore", medicalStoreRoute);

// Un-Protected Routes
unProtectedRouter.use("/auth", authRoute);
unProtectedRouter.use("/doctorAuth", doctorAuthRoute);
unProtectedRouter.use("/caretakerAuth", caretakerAuthRoute);
unProtectedRouter.use("/labAuth", labAuthRoute);
unProtectedRouter.use("/medicalStoreAuth", medicalStoreAuthRoute);

export { protectedRouter, unProtectedRouter };
