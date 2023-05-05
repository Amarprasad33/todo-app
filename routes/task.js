import express from "express";
import { addTask, deleteTask, getAllTasks, updateTask } from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, addTask);

router.get("/my", isAuthenticated, getAllTasks);

router.route("/:id")
    .put(isAuthenticated, updateTask)
    .delete(isAuthenticated, deleteTask);

export default router;