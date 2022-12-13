import express from "express";
import {
	createHotel,
	deleteHotel,
	getHotel,
	getAllHotels,
	updateHotel,
	countByCity,
	countByType,
	getHotelRooms
} from "../controllers/hotel.controller.js";

const router = express.Router();

router.post("/", createHotel);
router.put("/:id", updateHotel);
router.delete("/:id", deleteHotel);
router.get("/find/:id", getHotel);
router.get("/", getAllHotels);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
