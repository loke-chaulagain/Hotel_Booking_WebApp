import express from 'express';  //es6 module
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from 'cookie-parser';


//json parser
app.use(express.json());


//MonogoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MonogoDB connection Successful"))
    .catch((error) => console.log({ msg: "MongoDB Disconnected", error }));


//Middlewares
app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)
app.use(cookieParser())


//Error handling middleware
app.use((error, req, res, next) => {
    const errorStatus = error.status || 500;
    const errorMessage = error.message || "Something went wrong";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: error.stack
    })
})



//Port Listening
app.listen(process.env.PORT, () => {
    console.log("Backend server is running on port " + process.env.PORT);
})