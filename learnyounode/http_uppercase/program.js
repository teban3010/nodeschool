const http = require('http');
const map = require('through2-map');

const port = Number(process.argv[2]);

const server = http.createServer(function (req, res) {
    if (req.method !== 'POST') {
        return res.end('send me a POST\n')
    }

    req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res)
})

server.listen(port)