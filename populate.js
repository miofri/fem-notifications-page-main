// This file was used to populate MongoDB with its initial data.

const mongoose = require('mongoose');

let activities = [
	{
		"notifid": 1,
		"avi": "images/avatar-mark-webber.webp",
		"name": "Mark Webber",
		"activity": "Reacted",
		"target": "My first tournament today!",
		"message": "",
		"time": "1m ago",
		"img": ""
	},
	{
		"notifid": 2,
		"avi": "images/avatar-angela-gray.webp",
		"name": "Angela Gray",
		"activity": "Followed",
		"target": "you",
		"message": "",
		"time": "5m ago",
		"img": ""

	},
	{
		"notifid": 3,
		"avi": "images/avatar-jacob-thompson.webp",
		"name": "Jacob Thompson",
		"activity": "JoinedGroup",
		"target": "Chess Club",
		"message": "",
		"time": "1 day ago",
		"img": ""
	},
	{
		"notifid": 4,
		"avi": "images/avatar-rizky-hasanuddin.webp",
		"name": "Rizky Hasanuddin",
		"activity": "PrivateMessage",
		"target": "you",
		"message": "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
		"time": "5 days ago",
		"img": ""
	},
	{
		"notifid": 5,
		"avi": "images/avatar-kimberly-smith.webp",
		"name": "Kimberly Smith",
		"activity": "Commented",
		"target": "your picture",
		"message": "",
		"time": "1 weeks ago",
		"img": "images/image-chess.webp"
	},
	{
		"notifid": 6,
		"avi": "images/avatar-nathan-peterson.webp",
		"name": "Nathan Peterson",
		"activity": "Reacted",
		"target": "5 end-game strategies to increase your win rate",
		"message": "",
		"time": "2 weeks ago",
		"img": ""
	},
	{
		"notifid": 7,
		"avi": "images/avatar-anna-kim.webp",
		"name": "Anna Kim",
		"activity": "LeftGroup",
		"target": "Chess Club",
		"message": "",
		"time": "2 weeks ago",
		"img": ""
	}
];

if (process.argv.length < 3) {
	console.log('Please provide the password as an argument: node mongo.js <password>')
	process.exit(1)
}

const password = process.argv[2];

const url = `mongodb+srv://slvkesuma:1234@cluster0.smqtqch.mongodb.net/NotifApp?retryWrites=true&w=majority`

const notifSchema = new mongoose.Schema({
	notifid: String,
	avi: String,
	name: String,
	activity: String,
	target: String,
	message: String,
	time: String,
})

const Notif = mongoose.model('Notif', notifSchema);

const adding = async () => {
	for await (const element of activities) {
		const notif = new Notif({
			notifid: element.notifid,
			avi: element.avi,
			name: element.name,
			activity: element.activity,
			target: element.target,
			message: element.message,
			time: element.time,
		})
		await notif.save();
	}
}

mongoose
	.connect(url)
	.then(async () => {
		console.log('connected');
		await adding()
		return
	})
	.then(() => {
		mongoose.connection.close()
	})
	.catch((err) => console.log(err));
