const express = require("express");
var path = require("path");
var app = express();
var router = express.Router();

// Import the model (user.js) to use its database functions.
const user = require("../models/user.js");

// Create all our routes and set up logic within those routes where required.
app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname, "/home.html"))
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

// router.get("/signup.html", (req, res) => {
//   user.all(function(data) {
//     const name = {
//       users: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// router.post("/signup.html", (req, res) => {
//   user.create([
//     "email",
//   ], [
//     req.body.email
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/signup.html/:id", (req, res) => {
//   const condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   user.update({
//     email: req.body.email
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/signup.html/:id", (req, res) => {
//   const condition = "id = " + req.params.id;

//   user.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.post('/signup.html', function(req, res, next) {
	
// 	//req.checkBody('username', 'username cannot be empty.').notEmpty();

// 	//const errors = req.validationErrors();

// 	// if (errors) {
// 	// 	console.log(`errors: ${JSON.stringify(errors)}`);

// 	// 	res.render('register', {title: 'Registration error'});
// 	// }

// 	const username = req.body.username;
// 	const email = req.body.email;
// 	const password = req.body.password;



// 	const db = require('../db.js');

// 	db.query('INSERT INTO bandmembers (email) VALUES (?)', [email], function(error, results, fields) {
// 		if (error) throw error;
// 		res.render('/signup.html', { title: 'Registration Complete' });
// 	})
// });

// Export routes for server.js to use.
module.exports = app;
module.exports = router;
