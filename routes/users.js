var express = require('express');
var router = express.Router();
var connection = require('../util/mysqlConnection');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  connection.query('SELECT * from users', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({ 'data' : results }));
  });
});

module.exports = router;
