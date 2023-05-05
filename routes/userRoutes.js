import express from "express";
import {  getAllUsers, getUserDetails, register, login  } from "../controllers/user.js";



const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", register);

router.post("/login", login);

router.route("/userid/:id")
    .get(getUserDetails)


export default router;