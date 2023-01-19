const http = require('http');

const server = http.createServer((req, res) => {
    //console.log(req);
    if (req.url === '/') {
        res.write('Welcome to our home page');
    }else if(req.url==='/about'){
        res.write('here is our short history');
    }else{
        res.write(`
        <h1>oops!</h1>
        <p>we cant find this page you muppet</p>
        <a href="/">home</a>
        `);
    }
    res.end();
});

server.listen(5000);