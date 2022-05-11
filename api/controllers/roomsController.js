import Room from '../models/Room.js';
import Hotel from '../models/Hotel.js';


//After creating a new room, we need to add it to the hotel's rooms array
//Create
export const createRoom = async (req, res, next) => {
    const hotelid = req.params.hotelid;
    const newRoom = new Room(req.body);

    try {
        const savedRoom = await newRoom.save();

        //adding this room id to the hotel's rooms array
        const hotel = await Hotel.findByIdAndUpdate(hotelid, { $push: { rooms: savedRoom._id } });
        res.status(201).json(savedRoom)

    } catch (error) {
        next(error)
    }
}


//Update room
export const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedRoom);
    } catch (error) {
        next(error)
    }
}


//Delete Room
export const deleteRoom = async (req, res, next) => {
    const hotelid = req.params.hotelid;
    try {
        const deletedRoom = await Room.findByIdAndDelete(req.params.id)
        //removing this room id from the hotel's rooms array
        const hotel = await Hotel.findByIdAndUpdate(hotelid, { $pull: { rooms: req.params.id} });
        res.status(200).json({ msg: "This Room has been deleted", deletedRoom });
    } catch (error) {
        next(error)
    }
}


//Get Room
export const getRoom = async (req, res, next) => {
    try {
        const singleRoom = await Room.findById(req.params.id)
        res.status(200).json(singleRoom);
    } catch (error) {
        next(error)
    }
}


//GetAll Rooms
export const getAllRoom = async (req, res, next) => {
    try {
        const allRooms = await Room.find()
        res.status(200).json(allRooms);
    } catch (error) {
        next(error)
    }
}



