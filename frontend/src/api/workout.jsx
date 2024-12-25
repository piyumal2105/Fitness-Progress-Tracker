import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3001/api" });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const addWorkout = (workoutData) => API.post("/workouts/add", workoutData);
export const getWorkouts = () => API.get("/workouts");
