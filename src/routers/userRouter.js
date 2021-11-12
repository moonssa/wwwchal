
import express from "express";
import {edit, see} from "../controllers/userController";

const userRouter= express.Router();

userRouter.get("/edit-profile", edit);
userRouter.get("/:id(\\d+)", see);

export default userRouter;