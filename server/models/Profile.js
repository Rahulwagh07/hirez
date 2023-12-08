const mongoose = require("mongoose");

 
const profileSchema = new mongoose.Schema({
	gender: {
		type: String,
	},
	dateOfBirth: {
		type: String,
	},
	about: {
		type: String,
		trim: true,
	},
	contactNumber: {
		type: Number,
		trim: true,
	},
    role:{
        type:String,
        enum:["Video Editor", "Content Writer", "Social Media Manager"],
    },
});

 
module.exports = mongoose.model("Profile", profileSchema);
