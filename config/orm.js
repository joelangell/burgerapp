
var connection = require("../config/connection.js");

var orm = {
  all: function(tableInput, cb) {
    var allQuery = "SELECT * FROM burgers;";
    connection.query(allQuery, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, cols, newBurger, cb) {
    var addQuery = "INSERT INTO burgers (burger_name) VALUES ('" + newBurger + "');"
    connection.query(addQuery, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
  update: function(table, objColVals, condition, cb) {
    var updateQuery = "UPDATE burgers SET devoured = true WHERE " + condition + ";"
    connection.query(updateQuery, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;
