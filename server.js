const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8081;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("view"));

//app.use(express.static(__dirname + '/view'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Import routes and give the server access to them.
const routes = require("./controllers/musicController.js");


app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`);
});
