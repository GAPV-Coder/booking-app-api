import mongoose from "mongoose";

const _connect = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.log("DB Connection Successfull!");
	} catch (error) {
		throw error;
	}
};

mongoose.connection.on("Disconnected", () => {
	console.log("Sorry, an error occurred with the DB connection!");
});

export default _connect;
