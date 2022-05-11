import User from '../models/User.js';
import bcrypt from 'bcrypt';
import { createError } from '../utils/error.js';
import jwt from 'jsonwebtoken';


//Register
export const register = async (req, res, next) => {
    try {
        //create salt
        const salt = await bcrypt.genSalt(10);
        //hash password
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });
        const savedUser = await newUser.save();
        res.status(201).json({ msg: "User has been created", savedUser })

    } catch (error) {
        next(error)
    }
}



//Login
export const login = async (req, res, next) => {
    try {
        //first find the username
        const user = await User.findOne({ username: req.body.username })

        //if user exists
        if (user) {
            //check the user password with hashed password
            const validPassword = await bcrypt.compare(req.body.password, user.password)

            //if password is valid
            if (validPassword) {

                //if password is correct Create jwt token
                const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: "7d" })
                // const token = jwt.sign({ id: user._id.toString, email: user.email, isAdmin: user.isAdmin }, "lokendra", { expiresIn: "2h" })

                //hiding the password from the response
                const { password, ...others } = user._doc;

                //saving this token in cookie
                res.cookie("access_token", token, { httpOnly: true }).status(200).json(others)
                // res.status(200)
                //     .cookie("access_token", token, { httpOnly: true })
                //     .json({ msg: "user login", others })


            } else {
                next(createError(401, "Invalid password"))
            }
        } else {
            return next(createError(404, "User does not exist"))
        }
    } catch (error) {
        next(error)
    }
}