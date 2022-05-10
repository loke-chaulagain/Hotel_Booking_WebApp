import express from 'express';
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from '../controllers/hotelsController.js';
const router = express.Router();


//Create a new hotel
router.post("/", createHotel)

//Update a hotel
router.put("/update/:id", updateHotel)

//Delete a hotel
router.delete("/:id", deleteHotel)

//Get a hotel
router.get("/find/:id", getHotel)

//Get all hotels
router.get("/findAll", getAllHotel)

export default router;