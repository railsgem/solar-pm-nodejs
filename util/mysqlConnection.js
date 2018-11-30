var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : process.env.DBHOST || 'localhost',
    user     : process.env.DBUSER || 'root',
    password : process.env.DBPASSWORD || '',
    database : process.env.DBNAME || 'testdb'
  });


connection.connect();

module.exports = connection;