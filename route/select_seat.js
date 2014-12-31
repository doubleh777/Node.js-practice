//select seat
var fs = require('fs');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser')
var mysql = require('mysql');
var client = mysql.createConnection({
	user: 'root',
	password: '',
	'database': 'movies'
});

router.use(bodyParser.urlencoded());
router.use(bodyParser.json());

router.get('/', function(req, res) {
	res.render("select_seat.html");
});

router.post('/selected_seat', function(req, res){
	var selected_seat = req.param('selected_seat');
	console.log('selected seat is ' + selected_seat);

	var query = "INSERT INTO "

});
module.exports = router;