const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    res.write('Hello! This is a simple Node.js server.\n');
    res.write('You requested: ' + req.url);

    res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
