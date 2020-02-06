// npm install --save ejs express mongoose 세 개의 package 한 번의 설치
// site - https://www.a-mean-blog.com/ko/blog/Node-JS-%EC%B2%AB%EA%B1%B8%EC%9D%8C/%EC%A3%BC%EC%86%8C%EB%A1%9D-%EB%A7%8C%EB%93%A4%EA%B8%B0/%EC%A3%BC%EC%86%8C%EB%A1%9D-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1-%EB%B0%8F-mongoose%EB%A1%9C-DB-%EC%97%B0%EA%B2%B0
var express = require('express'); 
var app = express();

// express -  node.js 프레임워크 
var mongoose = require('mongoose');

//DB Setting
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://test_username:test_password@localhost:12712/database");
var db = mongoose.connection;

db.once('open', function() {
    console.log("DB Connected!");
});

db.on('error', function(err) {
    console.log("DB ERROR : ", err);
});

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
//ejs를 사용하기 위해 express의 view engine에 ejs를 set하는 코드
//ejs - html 안에서 JavaScript를 사용할 수 있게 하는 것

const port = 3000;
app.listen(port, function() {
    console.log("================ Server On ================");
});