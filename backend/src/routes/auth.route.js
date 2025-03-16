import express from 'express'; 
import { login, signout, signup } from '../controllers/auth.controller.js';

const router = express.Router();


router.post("/signup",signup)

router.post("/signup",signout)

router.post("/signup",login)

export default router;