var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {    
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(col, val, id, cb) {
    orm.updateOne("burgers", col, val, id, function(res) {
      cb(res);
    });
  },
  delete: function(id,cb) {
    orm.deleteOne("burgers", id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;