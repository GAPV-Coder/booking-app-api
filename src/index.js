import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import hotelsRoute from "./routes/hotels.routes.js";
import authRoute from "./routes/auth.routes.js";

const app = express();
dotenv.config();

import _connect from "./database/db.js";

// Middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);

app.use((err, req, res, next) => {
	const errorStatus = err.status || 500;
	const errorMessage = err.message || "Something went wrong!";
	return res.status(errorStatus).json({
		success: false,
		status: errorStatus,
		message: errorMessage,
		stack: err.stack
	});
});

app.listen(process.env.PORT || 8800, () => {
	_connect();
	console.log("Backend server is running!");
});
