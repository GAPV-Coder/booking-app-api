import express from "express";
import {
	createHotel,
	deleteHotel,
	getHotel,
	getAllHotels,
	updateHotel
} from "../controllers/hotel.controller.js";

const router = express.Router();

router.post("/", createHotel);
router.put("/:id", updateHotel);
router.delete("/:id", deleteHotel);
router.get("/find/:id", getHotel);
router.get("/", getAllHotels);

export default router;
