//show booking information
var fs = require('fs');
var http = require('http');
var express = require('express');
var mysql = require('mysql');
var client = mysql.createConnection({
	user: 'root',
	password: '',
	'database': 'movies'
});


module.exports = router;