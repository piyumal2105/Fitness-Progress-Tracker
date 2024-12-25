import Workout from "../models/Workout.js";

// Add a workout
export const addWorkout = async (req, res) => {
  try {
    const workout = await Workout.create({ ...req.body, userId: req.user.id });
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all workouts
export const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ userId: req.user.id });
    res.json(workouts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
