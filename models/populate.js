// This file was used to populate MongoDB with its initial data.

require('dotenv').config()
const mongoose = require('mongoose');
const Notif = require('./notif')

let activities = [
	{
		"notifid": 1,
		"avi": "images/avatar-mark-webber.webp",
		"name": "Mark Webber",
		"activity": "Reacted",
		"target": "My first tournament today!",
		"message": "",
		"time": "1m ago",
		"img": "",
		"read": false
	},
	{
		"notifid": 2,
		"avi": "images/avatar-angela-gray.webp",
		"name": "Angela Gray",
		"activity": "Followed",
		"target": "you",
		"message": "",
		"time": "5m ago",
		"img": "",
		"read": false

	},
	{
		"notifid": 3,
		"avi": "images/avatar-jacob-thompson.webp",
		"name": "Jacob Thompson",
		"activity": "JoinedGroup",
		"target": "Chess Club",
		"message": "",
		"time": "1 day ago",
		"img": "",
		"read": false

	},
	{
		"notifid": 4,
		"avi": "images/avatar-rizky-hasanuddin.webp",
		"name": "Rizky Hasanuddin",
		"activity": "PrivateMessage",
		"target": "you",
		"message": "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
		"time": "5 days ago",
		"img": "",
		"read": true

	},
	{
		"notifid": 5,
		"avi": "images/avatar-kimberly-smith.webp",
		"name": "Kimberly Smith",
		"activity": "Commented",
		"target": "your picture",
		"message": "",
		"time": "1 weeks ago",
		"img": "images/image-chess.webp",
		"read": true
	},
	{
		"notifid": 6,
		"avi": "images/avatar-nathan-peterson.webp",
		"name": "Nathan Peterson",
		"activity": "Reacted",
		"target": "5 end-game strategies to increase your win rate",
		"message": "",
		"time": "2 weeks ago",
		"img": "",
		"read": true

	},
	{
		"notifid": 7,
		"avi": "images/avatar-anna-kim.webp",
		"name": "Anna Kim",
		"activity": "LeftGroup",
		"target": "Chess Club",
		"message": "",
		"time": "2 weeks ago",
		"img": "",
		"read": true
	},
	{
		"notifid": 8,
		"avi": "images/avatar-anna-kim.webp",
		"name": "Anna Kim",
		"activity": "LeftGroup",
		"target": "Chestnut Aadvark Club",
		"message": "",
		"time": "2 weeks ago",
		"img": "",
		// "read": true

	}
];


const url = process.env.URL

const adding = async () => {
	console.log('populating')
	for await (const element of activities) {
		const notif = new Notif({
			notifid: element.notifid,
			avi: element.avi,
			name: element.name,
			activity: element.activity,
			target: element.target,
			message: element.message,
			time: element.time,
			read: element.read,
			img: element.img,
		})
		await notif.save();
	}
	console.log('done populating')

}

mongoose
	.connect(url)
	.then(() => {
		if (process.argv[2] === 'remove') {
			console.log('removing')
			return Notif.deleteMany({})
		}
	})
	.then(() => {
		return adding()
	})
	.then(() => {
		return mongoose.connection.close()
	})
	.catch((err) => console.log(err));

