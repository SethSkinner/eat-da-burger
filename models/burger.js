var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
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

module.exports = burger;
