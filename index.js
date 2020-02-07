// require == import
const http = require('http');
// 1. 서버의 사용을 위해서 http 모듈을 http 변수에 담는다.
const fs = require('fs');
const server = http.createServer((req, res) => {
    var url = req.url;
    if (req.url == '/') {
        url = '/public/index.html';

    }
    if (req.url == '/favicon.ico') {
        res.writeHead(404);
        res.end();
        return;
    }
    res.writeHead(200);
    // res 객체를 사용해 사용자 측으로 반환값을 넘겨줄 수 있다.
    // 200은 들어오는 어떤 요청에 대해 정상적으로 값을 리턴할 때 사용되는 http 상태 코드이다.
    // 오류가 없이 서버에서 처리가 정상적으로 완료되면 200코드를 담아서 응답헤더를 설정해준다.
    res.end(fs.readFileSync(__dirname + url));
    // end() 는 컨텐츠를 담아서 브라우저 측에 전달한다.
});
server.listen(3000, function() {
    console.log('------------------------------------------------------------------------------');
    console.log('');
    console.log('------------------------------- SERVER RUNNING -------------------------------');
    console.log('');
    console.log('------------------------------------------------------------------------------');
});