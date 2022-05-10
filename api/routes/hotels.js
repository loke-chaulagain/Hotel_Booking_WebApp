import express from 'express';
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from '../controllers/hotelsController.js';
const router = express.Router();
import Hotel from '../models/Hotel.js';


//Create 
router.post("/create", createHotel)

//Update 
router.put("/update/:id", updateHotel)

//Delete a
router.delete("/delete/:id", deleteHotel)

//Get 
router.get("/get/:id", getHotel)

//GetAll
router.get("/getAll", getAllHotel)

export default router;