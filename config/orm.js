var connection = require("../config/connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  insertOne: function(tableInput, cols, vals, cb) {

    var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
    console.log(queryString);
    connection.query(queryString, [tableInput, cols[0], cols[1], vals[0], vals[1]], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  updateOne: function(tableInput, col1, val1, id, cb) {
    var queryString =
      "UPDATE ?? set ?? = ? where id = ?";

    connection.query(
      queryString, [tableInput, col1, val1, id], function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
      }
    );
  },
  deleteOne: function(tableInput, id, cb) {
    var queryString =
      "DELETE from ?? where id = ?";

    connection.query(
      queryString, [tableInput, id], function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
      }
    );
  }
};

module.exports = orm;
