const express = require("express");

const router = express.Router();

// Import the model (user.js) to use its database functions.
const user = require("../models/user.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  user.all(function(data) {
    const hbsObject = {
      users: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/users", (req, res) => {
  user.create([
    "name"
  ], [
    req.body.name
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/users/:id", (req, res) => {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

});

router.delete("/api/users/:id", (req, res) => {
  const condition = "id = " + req.params.id;

  user.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
