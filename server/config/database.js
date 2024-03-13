const mongoose = require("mongoose");
require("dotenv").config();
//const MONGODB_URL="mongodb+srv://thakurvinaysumbria40:ib3r7r6nohPD7i4L@cluster0.hewdmx7.mongodb.net/DataBase1";

const  MONGODB_URL  = process.env.MONGODB_URL;

exports.connect = () => {
	mongoose
		.connect(MONGODB_URL, {
			useNewUrlparser: true,
			useUnifiedTopology: true,
		})
		.then(console.log(`DB Connection Success`))
		.catch((err) => {
			console.log(`DB Connection Failed`);
			console.log(err);
			process.exit(1);
		});
};
