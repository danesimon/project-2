const express = require("express");
var path = require("path");
var app = express();
var router = express.Router();

// Import the model (user.js) to use its database functions.
const user = require("../models/user.js");

// Create all our routes and set up logic within those routes where required.
app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname, "../view/home.html"))
});

app.get('/signup.html', function (req, res) {
  res.sendFile(path.join(__dirname, "../view/signup.html"))
});

app.get('/login.html', function (req, res) {
  res.sendFile(path.join(__dirname, "../view/login.html"))
});

app.get('/profile.html', function (req, res) {
  res.sendFile(path.join(__dirname, "../view/profile.html"))
});

app.get('/home.html', function (req, res) {
  res.sendFile(path.join(__dirname, "../view/home.html"))
});

router.post('/signup.html', function(req, res, next) {
	
	//req.checkBody('username', 'username cannot be empty.').notEmpty();

	//const errors = req.validationErrors();

	// if (errors) {
	// 	console.log(`errors: ${JSON.stringify(errors)}`);

	// 	res.render('register', {title: 'Registration error'});
	// }

	const username = req.body.username;
	const email = req.body.email;
	const password = req.body.password;



	const db = require('../db.js');

	db.query('INSERT INTO bandmembers (email) VALUES (?)', [email], function(error, results, fields) {
		if (error) throw error;
		res.render('/signup.html', { title: 'Registration Complete' });
	})
});

// Export routes for server.js to use.
module.exports = app;
module.exports = router;
