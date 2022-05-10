import express from 'express';
import Hotel from '../models/Hotel.js';
import { createError } from '../utils/error.js';
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



//Update a hotel
router.put("/update/:id", async (req, res) => {
    try {

        // if (post.userId === req.body.userId) {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel);
        // }
        // else {
        //     res.status(401).json("Unauthorized")
        // }

    } catch (error) {
        res.status(500).json(error)
    }
})




//Delete a hotel
router.delete("/:id", async (req, res) => {
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json({ msg: "This hotel has been deleted", deletedHotel });

    } catch (error) {
        res.status(500).json(error)
    }
})



//Get a hotel
router.get("/find/:id", async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel);

    } catch (error) {
        res.status(500).json(error)
    }
})



//Get all hotels
router.get("/findAll", async (req, res, next) => {

    //tryCatch vanda agadi nai failed vaiskyo vane
    // const failed = true
    // if (failed) return next(createError(401, "Unauthorized"))

    try {
        const hotels = await Hotel.find()
        res.status(200).json(hotels);
    } catch (error) {
        next(error)
    }
})









export default router;