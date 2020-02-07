/*
POST는 주소만 요청하고 변수와 값을 주소가 아닌 요청 BODY에 담아서 서버측에 요청한다
*/

const http = require('http');
const querystring = require('querystring');
const port = 3000;

let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.end('2월 10일 시작');
});

server.listen(port, () => {
    console.log('SERVER START!');
});