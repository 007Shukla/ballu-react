// backend/routes/appointmentRoutes.js
// const express = require('express');
// const { bookAppointment } = require('../controllers/appointmentController');
// const router = express.Router();
import express from "express"
import { bookAppointment } from "../controllers/appointmentController.js";
const router=express.Router();
router.post('/book', bookAppointment);

export const bookAppointmentRoute=router;


