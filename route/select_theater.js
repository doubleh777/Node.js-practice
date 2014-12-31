//select theater
var fs = require('fs');
var http = require('http');
var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var router = express.Router();
var client = mysql.createConnection({
	user: 'root',
	password: '',
	'database': 'movies'
});

router.use(bodyParser.urlencoded());
router.use(bodyParser.json());

router.get('/select_theater', function(req, res) {
	res.render("select_theater.html");
});

router.post('/selected_theater', function(req, res){
	var selected_theater = req.param('selected_theater');
	console.log('selected theater is ' + selected_theater);

	var query = "INSERT INTO "

});
module.exports = router;