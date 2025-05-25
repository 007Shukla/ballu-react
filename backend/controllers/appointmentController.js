// backend/controllers/appointmentController.js

import {Appointment} from "../models/Appointment.js";


 export const bookAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ success: true, message: "Appointment booked successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
