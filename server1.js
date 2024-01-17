const http = require('http');

http.createServer((req, res) => {
    console.log('A http request on server');
    res.end('Okay buddy, got your req!!!!');
}).listen(8000);
``