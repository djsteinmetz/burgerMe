const connection = require("../config/connection");
module.exports = function (orm) {
    function selectAll() {
        connection.query("SELECT * FROM burgers;", function (err, data) {
            if (err) {
                return res.status(500).end();
            }
            res.send("HOME PAGE");
            // res.render("index", { plans: data });
        });
    };
    function insertOne() {

    };
    function updateOne() {

    };
};