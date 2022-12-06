import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

import _connect from "./database/db.js";

app.listen(process.env.PORT || 8800, () => {
	_connect();
	console.log("Backend server is running!");
});
