const strftime = require('strftime');
const net = require('net');

const server = net.createServer(function (socket) {
    socket.end(`${strftime('%Y-%m-%d %H:%M', new Date())}\n`);
});

server.listen(process.argv[2]);