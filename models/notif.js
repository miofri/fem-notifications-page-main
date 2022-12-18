const mongoose = require('mongoose');
require('dotenv').config()

const url = process.env.URL

const notifSchema = new mongoose.Schema({
	notifid: String, //temporary
	avi: String,
	name: String,
	activity: String,
	target: String,
	message: String,
	time: String,
	read: {
		type: Boolean,
		default: false,
	},
	img: String,
})

//transform _id into id (String) & deletes __v in the returned data (original data stays the same).
notifSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
})

const Notif = mongoose.model('Notif', notifSchema);

module.exports = Notif;
