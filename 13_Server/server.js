// http	- module to make Node.js act as an HTTP server

const http = require('http');

// IP: 127.0.0.1 - localhost
const port = 1234; // reccomend to use value > 1024
const address = '127.0.0.1';

// create server object
const server = http.createServer((req, res) => {
    // req - contains client request data
    // res - used to return data to client

    // return respose to client
    switch (req.method) {
        case 'GET':
            res.statusCode = 200; // OK
            res.setHeader('Content-Type', 'text/plain');
            res.end("Operation complete successfully!");
            break;
        case 'POST':
            res.statusCode = 200; // OK
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
                id: Math.floor(Math.random() * 1000),
                username: 'exampl245',
                email: 'vlad@gmail.com'
            }));
            break;
        default:
            res.statusCode = 400; // Bad Request
            res.setHeader('Content-Type', 'text/plain');
            res.end("Mehtod is not allowed!");
    }
});

// start server
server.listen(port, address, () => {
    console.log(`Server is listening on host address: http://${address}:${port}`);
});
