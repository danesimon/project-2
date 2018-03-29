const express = require("express");
var path = require("path");
var app = express();

// Import the model (user.js) to use its database functions.
const user = require("../models/user.js");

// Create all our routes and set up logic within those routes where required.
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "../view/login.html"))
});

// Export routes for server.js to use.
module.exports = app;
