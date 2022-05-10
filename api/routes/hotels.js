import express from 'express';
import Hotel from '../models/Hotel.js';
const router = express.Router();


//Create a new hotel
router.post("/", async (req, res) => {
    const newHotel = new Hotel(req.body);      //req means what we are taking from user

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel);
        
    } catch (error) {
        res.status(500).json(error)       //500 = Internal Server Error
    }
})

export default router;