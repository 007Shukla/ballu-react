import {User} from "../models/User.js";
import bcrypt from "bcryptjs"


export const signup = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ status: "error", message: "All fields are required" });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ status: "error", message: "Email already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ name, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ status: "success", message: "Signup successful!" });
    } catch (err) {
        console.error("Signup Error:", err);
        res.status(500).json({ status: "error", message: "Server error. Try again." });
    }
};




export const login = async (req, res) => {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
        return res.status(400).json({ status: "error", message: "Email and password are required" });
    }

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ status: "error", message: "Invalid credentials" });
        }

        // Compare hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ status: "error", message: "Invalid credentials" });
        }

        // Success
        res.status(200).json({ status: "success", message: "Login successful", user: { name: user.name, email: user.email } });

    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ status: "error", message: "Server error" });
    }
};

