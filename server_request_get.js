/*
GET 요청 처리
- 주소값을 이용해 요청을 하는 방식
서버로 값을 전달하기 위해서는 url?key1=val1&key2&val2 형태로 요청한다
주소값 뒤에 붙어가는 값을 Query String 이라고 한다

Query String은 주소형태로도 요청할 수 있고 form 태그를 사용해서 요청할 수도 있다.
*/
const http = require('http');

// 1. 요청한 url을 객체로 만들기 위해 url 모듈사용
// 내장 모듈인 url은 클라이언트가 요청한 주소값을 js로 변환하여 사용할 수 있게 하는 모듈이다.
const url = require('url');

// 2. 요청한 url 중에 Query String을 객체로 만들기 위해 QueryStirng 모듈 사용
const querystring = require('querystring');

const server = http.createServer(function(req, res) {
    console.log('LOG START');

    // 3. 브라우저에서 요청한 주소를 파싱하여 객체화 후에 출력
    let parsedUrl = url.parse(req.url);

    console.log('parsedUrl : ' + parsedUrl);

    let parsedQuery = querystring.parse(parsedUrl.query, '&', '=');

    console.log(parsedQuery);

    console.log('LOG END');

    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end('Hello Node.JS');
});

server.listen(3000, function() {
    console.log('Server Start')
});
