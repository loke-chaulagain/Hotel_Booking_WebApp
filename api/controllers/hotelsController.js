import Hotel from '../models/Hotel.js';
import { createError } from '../utils/error.js';


//Create hotel
export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel);
    } catch (error) {
        next()
    }
}


//Update hotel
export const updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel);
    } catch (error) {
        next()
    }
}


//Delete delete
export const deleteHotel = async (req, res, next) => {
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json({ msg: "This hotel has been deleted", deletedHotel });
    } catch (error) {
        next()
    }
}


//Get hotel
export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel);
    } catch (error) {
        next()
    }
}


//GetAll hotels
export const getAllHotel = async (req, res, next) => {
    //tryCatch vanda agadi nai failed vaiskyo vane
    // const failed = true
    // if (failed) return next(createError(401, "Unauthorized"))
    try {
        const hotels = await Hotel.find()
        res.status(200).json(hotels);
    } catch (error) {
        next(error)
    }
}