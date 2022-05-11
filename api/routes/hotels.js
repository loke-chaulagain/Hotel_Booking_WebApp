import express from 'express';
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from '../controllers/hotelsController.js';
const router = express.Router();
import Hotel from '../models/Hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';


//Create 
router.post("/create",verifyAdmin, createHotel)

//Update 
router.put("/update/:id",verifyAdmin, updateHotel)

//Delete a
router.delete("/delete/:id",verifyAdmin, deleteHotel)

//Get 
router.get("/get/:id", getHotel)

//GetAll
router.get("/getAll", getAllHotel)

export default router;