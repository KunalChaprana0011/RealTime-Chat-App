import express from 'express'; 
import {  signin, signout, signup } from '../controllers/auth.controller.js';

const router = express.Router();


router.post("/signup",signup)

router.post("/signout",signout)

router.post("/signin",signin)

export default router;