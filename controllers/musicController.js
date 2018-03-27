const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
<<<<<<< HEAD
const profile = require("../models/profile.js");
=======
const cat = require("../models/cat.js");
>>>>>>> 6f18239986cdd82eb00f44c1f43cac7acc39651c

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  cat.all(function(data) {
    const hbsObject = {
      cats: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

<<<<<<< HEAD
router.post("/api/music", (req, res) => {
  profile.create([
    "name", 
  ], [
    req.body.name, 
=======
router.post("/api/cats", (req, res) => {
  cat.create([
    "name", "sleepy"
  ], [
    req.body.name, req.body.sleepy
>>>>>>> 6f18239986cdd82eb00f44c1f43cac7acc39651c
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

<<<<<<< HEAD
// router.put("/api/profile/:id", (req, res) => {
//   const condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

//router.delete("/api/music/:id", (req, res) => {
  //const condition = "id = " + req.params.id;

  //cat.delete(condition, function(result) {
    //if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      //return res.status(404).end();
    //} else {
      //res.status(200).end();
    //}
  //});
//});
=======
router.put("/api/cats/:id", (req, res) => {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  cat.update({
    sleepy: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/cats/:id", (req, res) => {
  const condition = "id = " + req.params.id;

  cat.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
>>>>>>> 6f18239986cdd82eb00f44c1f43cac7acc39651c

// Export routes for server.js to use.
module.exports = router;
