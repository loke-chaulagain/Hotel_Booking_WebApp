import express from 'express';
import { deleteUser, getAllUser, getUser, updateUser } from '../controllers/userController.js';
import { verifyToken } from '../utils/verifyToken.js';
const router = express.Router();



//
router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("Hello, you are authenticated")

})





//Update User
router.put('/:id',updateUser )

//Delete User
router.put('/:id',deleteUser )

//Get User
router.put('/:id',getUser )

//Get All Users
router.put('/:id',getAllUser )


export default router;