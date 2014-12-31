//select movie
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

//.use는 무조건 사용된다. 중간에서 무조건 돌고 가는 의미라서 미들웨어라고 함 
//bodyParser는 포스트정보를 분석해줌. param을 사용하려면 바디파서이걸 써줘야함 
//기본적으로 두개 나눠서 이렇게 많이 써준다. 
router.use(bodyParser.urlencoded());
router.use(bodyParser.json());

router.get('/', function(req, res) {
	res.render("main.html"); //이 파일을 보여주겠다. 
});

router.post('/selected_movie', function(req, res){
	console.log("hear");
	var selected_movie = req.param('selected_movie'); 
	console.log('select_movie request : ' + selected_movie);
});
module.exports = router; //라우터에 use, get, post들에 대한 정보들이 다 저장돼 있는데 이 라우터를 export함