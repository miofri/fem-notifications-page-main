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

app.get('/api/activities/:id', (request, response) => {
	Notif.findById(request.params.id).then(notifs => response.json(notifs))
})

app.put('/api/activities/updateall', (request, response, next) => {

	Notif.updateMany({}, { $set: { read: true } }).then(() => response.status(200).send())

})

// app.post('/api/persons', (request, response, next) => {
// 	const body = request.body;

// 	if (!body.name && !body.number) {
// 		return response.status(400).json({
// 			error: 'content missing'
// 		});
// 	}

// 	const newPerson = new Numbers({
// 		name: body.name,
// 		number: body.number
// 	})

// 	newPerson.save()
// 		.then(savedPerson => response.json(savedPerson))
// 		.catch(error => next(error))
// })

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
