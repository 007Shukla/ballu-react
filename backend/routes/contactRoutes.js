import express from "express"
import {Contact} from "../models/Contact.js";
const router=express.Router();

router.post('/contact', async (req, res) => {
  try {
    const { fullName, email, phone, message } = req.body;

    const newContact = new Contact({ fullName, email, phone, message });
    await newContact.save();

    res.status(201).json({ message: 'Contact saved successfully!' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

export const contactRoutes=router;
