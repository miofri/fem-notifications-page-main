const express = require('express');
const app = express();
const nodemon = require('nodemon');
const cors = require('cors');

app.use(express.json());
app.use(cors());

let activities = [
	{
		"notifid": 1,
		"avi": "../images/avatar-mark-webber.webp",
		"name": "Mark Webber",
		"activity": "Reacted",
		"target": "My first tournament today!",
		"message": "",
		"time": "1m ago",
		"img": ""
	},
	{
		"notifid": 2,
		"avi": "../images/avatar-angela-gray.webp",
		"name": "Angela Gray",
		"activity": "Followed",
		"target": "you",
		"message": "",
		"time": "5m ago",
		"img": ""

	},
	{
		"notifid": 3,
		"avi": "../images/avatar-jacob-thompson.webp",
		"name": "Jacob Thompson",
		"activity": "JoinedGroup",
		"target": "Chess Club",
		"message": "",
		"time": "1 day ago",
		"img": ""
	},
	{
		"notifid": 4,
		"avi": "../images/avatar-rizky-hasanuddin.webp",
		"name": "Rizky Hasanuddin",
		"activity": "PrivateMessage",
		"target": "you",
		"message": "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
		"time": "5 days ago",
		"img": ""
	},
	{
		"notifid": 5,
		"avi": "../images/avatar-kimberly-smith.webp",
		"name": "Kimberly Smith",
		"activity": "Commented",
		"target": "your picture",
		"message": "",
		"time": "1 weeks ago",
		"img": "images/image-chess.webp"
	},
	{
		"notifid": 6,
		"avi": "../images/avatar-nathan-peterson.webp",
		"name": "Nathan Peterson",
		"activity": "Reacted",
		"target": "5 end-game strategies to increase your win rate",
		"message": "",
		"time": "2 weeks ago",
		"img": ""
	},
	{
		"notifid": 7,
		"avi": "../images/avatar-anna-kim.webp",
		"name": "Anna Kim",
		"activity": "LeftGroup",
		"target": "Chess Club",
		"message": "",
		"time": "2 weeks ago",
		"img": ""
	}
];

app.get('/', (request, response) => {
	response.send("Welcome to notifications page!");
})

app.get('/api/activities', (request, response) => {
	response.send(activities);
})

const PORT = 3001;
app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
