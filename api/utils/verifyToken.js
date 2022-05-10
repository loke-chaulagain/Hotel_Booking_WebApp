import jwt from 'jsonwebtoken';
import { createError } from '../utils/error.js';


export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(createError(401, "Unauthorized"));
    }
    //if token is present then check if it is correct or not
    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
        if (error) 
            return next(createError(403, "Invalid Token"));
        
        //if token is correct then set the user to req.user
        req.user = user;
        next();
    })




}