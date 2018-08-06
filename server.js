const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./config/connection");
var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

connection.query("SELECT * FROM burgers;", function (err, data) {
    if (err) {
        return res.status(500).end();
    }
    res.send("HOME PAGE");
    // res.render("index", { plans: data });
});
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});