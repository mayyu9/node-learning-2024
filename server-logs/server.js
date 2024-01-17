const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('A new HTTP request came.....');
    // check to exclude fav icon req in the logs
    // if(req.url === '/favicon.ico') return res.end('No fav icon bro');
    // fs.appendFile('logs.txt', `New Req came on ${new Date().toLocaleDateString()} at ${req.url}\n`, (err) => {
    //     res.end('Okay bro, I got you!! Take Care');
    // })

    // handling different routes
    switch(req.url) {
        case '/' : res.end('Home Page');
        break;
        case '/about': res.end('About Page');
        break;
        default:
            res.end('404! Moye Moye');
    }
})

server.listen(8000);