
var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'content-type': 'text/plain'});
  res.end("Hello, Node user, I'm a static web server");
});

server.listen(3000);