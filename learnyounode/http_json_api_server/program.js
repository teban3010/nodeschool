const http = require('http');
const url = require('url');

const port = Number(process.argv[2]);

const parsetime = (time) => {
  return {
    "hour": time.getHours(),
    "minute": time.getMinutes(),
    "second": time.getSeconds()
  }
};

const unixtime = (time) => {
  return {
    "unixtime": time.getTime()
  }
};

const server = http.createServer(function (req, res) {
  const parsedUrl = url.parse(req.url, true);
  const time = new Date(parsedUrl.query.iso);
  const result = /^\/api\/parsetime/.test(req.url) ?
    parsetime(time) :
    (/^\/api\/unixtime/.test(req.url) ?
      unixtime(time) : null);


  if (result) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(port);