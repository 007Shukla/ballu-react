// backend/models/Appointment.js
import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  doctorName: { type: String, required: true },
  doctorSpecialty: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  message: { type: String }
}, {
  timestamps: true
});

export const Appointment = mongoose.model('Appointment', appointmentSchema);
