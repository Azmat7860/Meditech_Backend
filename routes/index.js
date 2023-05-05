import express from "express";

// routes
import userRoute from "./user/index.js";
import authRoute from "./user/auth.js"


const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes
protectedRouter.use("/user", userRoute);

// Un-Protected Routes
unProtectedRouter.use("/auth", authRoute);

export { protectedRouter, unProtectedRouter };
