//모듈 추출
var http = require('http');
var express = require('express');
var ejs = require('ejs');
//routing 모듈

var select_movie = require('./route/select_movie');
//var select_theater = require('./route/select_theater');
//var select_seat = require('./route/select_seat');
//var show_booking_information = require('./route/show_booking_information');


//서버 생성
var app = express();



//항상 설정되는 것을 지정해줌. 서버 실행되면 public에 있는 파일은 무조건 실행. 이 파일들은 파일이름만 써주면 된다 
app.use(express.static(__dirname + '/public'));
//view engine을 ejs로 사용하겠다라고 설정
app.set('view engine', 'ejs');
//views라는 폴더는 __dirname+'/views로 설정
app.set('views', __dirname+'/views');
//
app.engine('html', ejs.renderFile);


//라우팅
// '/'라고 치면 select_movie로 가라는 것 
app.get('/', select_movie);
//클라이언트가 /se~ 일로 포스트를 보낼 때 select_movie로 가라는 것 
app.post('/selected_movie', select_movie);

//app.get('/select_theater', select_theater);
//app.post('/select_theater', select_theater);

//app.get('/select_seat', select_seat);
//app.post('/select_seat', select_seat);

//app.get('/show_booking_information', show_booking_information);

//서버 실행
http.createServer(app).listen(52273, function(){
	console.log('Server Running at http://127.0.0.1:52273');
});