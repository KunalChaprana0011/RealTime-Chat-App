import express from "express";
import { signin, signout, signup ,updateProfile,checkAuth} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.middleware.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/signout", signout);

router.post("/signin", signin);

router.put("/update-profile",protectRoute,updateProfile);

router.get("/check",protectRoute,checkAuth)

export default router;
