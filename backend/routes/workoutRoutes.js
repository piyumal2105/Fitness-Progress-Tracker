import express from "express";
import { addWorkout, getWorkouts } from "../controllers/workoutController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/add", authMiddleware, addWorkout);
router.get("/", authMiddleware, getWorkouts);

export default router;
