import express from 'express'
const router = express.Router()
import {  getUsers, signin,signup } from "../controllers/user.js";

router.post("/signin",signin)
router.post("/signup",signup)
router.get('/signup/:id',getUsers)
/*router.route("/register").post(register)
router.route("/login").post(login)
router.route("/forgotpasword").post(forgotpassword)
router.route("/resetpassword/:resetToken").put(resetpassword)*/
 export default router;