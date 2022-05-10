import mongoose from 'mongoose';


const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    type: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },

    city: {
        type: String,
        required: true,
    },

    distance: {
        type: Number,
        required: true,
    },

    photos: {
        type: [String],

    },
    title: {
        type: String,
        required: true,
    },

    desc: {
        type: String,
        required: true,
        
    },

    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    rooms: {
        type: [String]    //room ko long id as string
    },
    cheapestPrice: {
        type: Number,
        
    },
    featured: {
        type: Boolean,
        default: false,
    }
});

//Export model
export default mongoose.model('Hotel', HotelSchema);