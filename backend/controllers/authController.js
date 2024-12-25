import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });

// Register user
export const registerUser = async (req, res) => {
  try {
    const { fullName, email, contactNumber, age, height, weight, password } =
      req.body;
    const user = await User.create({
      fullName,
      email,
      contactNumber,
      age,
      height,
      weight,
      password,
    });
    res.status(201).json({ token: generateToken(user._id) });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login user
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({ token: generateToken(user._id) });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
