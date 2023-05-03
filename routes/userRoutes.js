import express from "express";
import { User } from "../models/User.js";
import { deleteUser, getAllUsers, getUserDetails, register, specialFunc, updateUser } from "../controllers/user.js";



const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", register);

router.get("/userid/special", specialFunc )

router.get("/userid/:id")
    .get(getUserDetails)
    .put(updateUser)
    .delete(deleteUser)


export default router;