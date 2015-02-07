var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var port = 8888;
app.listen(port)

var user = {name: "Ladd", 
			location: "Orem, Ut", 
			hobbies: ['football', 'knives', 'fishing'], 
			Occupations: ['student', 'biotechnologist', 'operator'],
			mentions: ['www.google.com', 'wwww.espn.com', 'www.nfl.com', 'www.uvu.edu'],
			references: ['eddie spaghetti', 'big Al', 'dark cloud', 'red thunder'],
			skills: [
				{
				id: 1,
				name: 'javascript',
				experience: 'Intermediate'
				}
			]
		}




app.use(bodyParser.json())

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'Options GET POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Request-Width, Content-Type, Accept');
	next();
})

app.get('/name', function(req, res) {
	res.status(200).json(user.name)
})

app.get('/location', function(req, res) {
	res.status(200).json(user.location)
})

app.get('/hobbies', function(req, res) {
	
	if(req.query.reverse === 'desc') {
		res.status(200).json(user.hobbies.reverse());
	} 
	else if (req.query.alphatize === 'asc') {
		res.status(200).json(user.hobbies.sort());
	} else {res.status(200).json(user.hobbies)}
})

app.get('/Occupations', function(req, res) {
	
	if(req.query.reverse === 'desc') {
		res.status(200).json(user.Occupations.reverse());
	} 
	else if (req.query.alphatize === 'asc') {
		res.status(200).json(user.Occupations.sort());
	} else {res.status(200).json(user.Occupations)}
})

app.get('/Occupations/latest', function(req, res) {
	res.status(200).json(user.Occupations.pop())
})

app.put('/location', function(req, res) {
	console.log(req.body)
	res.status(200).json(user.location = req.body);
})

app.get('/mentions', function(req, res) {
	res.status(200).json(user.mentions)
})

app.post('/mentions', function(req, res) {
	user.mentions.push(req.body.mentions)
	console.log(req.body)
	res.status(200).json(user.mentions)
})

app.get('/references', function(req, res) {
	res.status(200).json(user.references)
})

app.post('/references', function(req, res) {
	user.references.push(req.body.references)
	console.log(req.body)
	res.status(200).json(user.references)
})

app.get('/skills', function(req, res) {
	if(req.query.experience === 'Intermediate') {
		res.status(200).json(user.skills);
	} else {res.status(200).json(user.skills)}
})

app.post('/skills', function(req, res) {
	user.skills.push(req.body.skills)
	console.log(req.body)
	res.status(200).json(user.skills)
})



