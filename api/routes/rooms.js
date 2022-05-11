import express from 'express';
const router = express.Router();
import { verifyAdmin } from '../utils/verifyToken.js';
import {createRoom , updateRoom, deleteRoom, getRoom, getAllRoom} from '../controllers/roomsController.js';


//Create room
router.post("/create/:hotelid", createRoom)

//Update 
router.put("/update/:id", verifyAdmin, updateRoom)

//Delete 
router.delete("/delete/:id/:hotelid", verifyAdmin, deleteRoom)

//Get 
router.get("/get/:id", getRoom)

//GetAll
router.get("/getAll", getAllRoom)

export default router;