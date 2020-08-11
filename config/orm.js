var connection = require("../config/connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
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