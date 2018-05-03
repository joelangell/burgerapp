
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3308,
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db"
});

var del = connection._protocol._delegateError;
connection._protocol._delegateError = function(err, sequence){
  if (err.fatal) {
    console.trace('fatal error: ' + err.message);
  }
  return del.call(this, err, sequence);
};


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;

