import express from 'express';
import { deleteUser, getAllUser, getUser, updateUser } from '../controllers/userController.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';
const router = express.Router();



router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("Hello, you are authenticated")
})

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("Hello, you are authenticated and you can delete your account ")
})

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("Hello, you are authenticated and you can delete all account ")
})



//Update User
router.put('/update/:id', verifyUser, updateUser)

//Delete User
router.put('/delete/:id', verifyUser, deleteUser)

//Get User
router.put('/get/:id', verifyUser, getUser)

//Get All Users
router.put('/getAll/:id', verifyAdmin, getAllUser)


export default router;