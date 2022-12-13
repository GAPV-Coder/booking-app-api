import express from "express";
import { verifyAdmin } from "../helpers/verifyAdmin.js";
import { verifyToken } from "../helpers/verifyToken.js";
import { verifyUser } from "../helpers/verifyUser.js";
import {
	updateUser,
	deleteUser,
	getUser,
	getAllUsers
} from "../controllers/user.controller.js";

const router = express.Router();

router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getUser);
router.get("/", verifyAdmin, getAllUsers);

export default router;
