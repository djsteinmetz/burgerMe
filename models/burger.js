var orm = require("../config/orm");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        })
    },
    delete: function(condition, cb) {
        orm.delete("burgers", function(res) {
            cb(res);
        })
    }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;