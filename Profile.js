// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Profile = sequelize.define("Profile", {
  // the routeName gets saved as a string
  routeName: Sequelize.STRING,
  // the name of the user (a string)
  name: Sequelize.STRING,
  // the user's instrument (a string)
  Instrument: Sequelize.STRING,
  // the User's age (a string)
  age: Sequelize.INTEGER,
  // User's Instrument
  Genre: Sequelize.STRING,
}, {
  timestamps: false
});

// Syncs with DB
Profile.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Profile;