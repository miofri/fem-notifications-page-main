const express = require('express');
const app = express();
const nodemon = require('nodemon');
const cors = require('cors');
const mongoose = require('mongoose');
const Notif = require('./models/notif');
const { response } = require('express');

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.URL)

app.get('/', (request, response) => {
	response.send("Welcome to notifications page!");
})

app.get('/api/activities', (request, response) => {
	Notif.find({}).then(notifs => response.json(notifs))
})

app.put('/api/activities/:id', (request, response, next) => {
	const body = request.body

	Notif.findByIdAndUpdate(request.params.id, body, { new: true })
		.then(notif => {
			if (notif) {
				response.json(notif)
			}
			else
				response.status(404).end()
		})
		.catch(error => next(error))
})

const PORT = 3001;
app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
