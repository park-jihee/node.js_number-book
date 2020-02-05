var express = require('express'); 
// express -  node.js 프레임워크 
var mongoose = require('mongoose');
var app = express();

//DB Setting
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGO_DB);
var db = mongoose.connection;

db.once('open', function() {
    console.log("DB Connected!");
});
db.on('error', function(err) {
    console.log("DB ERROR : ", err);
});

app.set('view engine', 'ejs');
//ejs를 사용하기 위해 express의 view engine에 ejs를 set하는 코드
//ejs - html 안에서 JavaScript를 사용할 수 있게 하는 것

const port = 3000;
app.listen(port, function() {
    console.log("================ Server On ================");
});

//mongodb+srv://test_username:test_password@cluster0-twcni.mongodb.net/test?retryWrites=true&w=majority