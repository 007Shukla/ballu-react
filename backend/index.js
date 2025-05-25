// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const authRoutes=require('./routes/authRoutes')
// const { bookAppointment } = require('./controllers/appointmentController');
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import { contactRoutes } from "./routes/contactRoutes.js";
import { authRoutes } from "./routes/authRoutes.js";
import { bookAppointmentRoute } from "./routes/appointmentRoutes.js";
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', contactRoutes);
app.use("/api", authRoutes);
app.use('/api/appointments', bookAppointmentRoute);

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(8080, () => {
      console.log('Server is running on http://localhost:8080');
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));
