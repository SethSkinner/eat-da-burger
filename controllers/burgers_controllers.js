var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {  
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  console.log("going to create a burger.");
  burger.create(["burger_name", "devoured"], [req.body.burger_name, 0], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var id = req.params.id;
  burger.update('devoured',1,id,
    function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

router.delete("/api/burgers/:id", function(req, res) {
  var id = req.params.id;
  burger.delete(id,
    function(result) {
      console.log(result);
      if (result.affectedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router;
