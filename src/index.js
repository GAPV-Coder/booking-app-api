import express from "express";
import dotenv from "dotenv";
import hotelsRoute from "./routes/hotels.routes.js";

const app = express();
dotenv.config();

import _connect from "./database/db.js";

// Middleware
app.use(express.json());

app.use("/api/hotels", hotelsRoute);

app.listen(process.env.PORT || 8800, () => {
	_connect();
	console.log("Backend server is running!");
});
