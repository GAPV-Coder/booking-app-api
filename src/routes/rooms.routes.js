import express from "express";
import { verifyAdmin } from "../helpers/verifyAdmin.js";
import {
	createRoom,
	deleteRoom,
	getRoom,
	getAllRooms,
	updateRoom,
	updateRoomAvailability
} from "../controllers/room.controller.js";

const router = express.Router();

router.post("/:hotelid", verifyAdmin, createRoom);
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
router.get("/:id", getRoom);
router.get("/", getAllRooms);

export default router;
