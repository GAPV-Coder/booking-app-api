import jwt from "jsonwebtoken";
import { createError } from "./errorResponse.js";
import { verifyToken } from "./verifyToken.js";

export const verifyAdmin = (req, res, next) => {
	verifyToken(req, res, next, () => {
		if (req.user.isAdmin) {
			next();
		} else {
			return next(createError(403, "You are not authorized!"));
		}
	});
};
