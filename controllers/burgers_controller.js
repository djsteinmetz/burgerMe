var express = require("express");
var router = express.Router();
// Import the model (burger.js) to use it's database functions.
var burger = require("../models/burger");

// Use Handlebars to render the main index.html page with the todos in it.
router.get("/", function (req, res) {
    burger.all(function(data) {
        var hbsObj = {
            burgers: data
        };
        console.log("OBJECT: ", hbsObj);
        res.render("index", hbsObj);
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition: ", condition);

    burgers.delete(condition, function(result) {
        if(result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            return res.status(200).end();
        };
    });
});

module.exports = router;