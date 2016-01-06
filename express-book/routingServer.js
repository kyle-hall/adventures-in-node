
var http = require('http');

var server = http.createServer(function (req, res) {
  var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

  switch (path) {
    case '':
      res.writeHead(200, {"content-type": 'text/plain'});
      res.end("Homepage");
      break;
    case '/about':
      res.writeHead(200, {"content-type": 'text/plain'});
      res.end("About");
      break;
    default:
      res.writeHead(404, {"content-type": 'text/plain'});
      res.end("Page Not Found");
      break;
  }
});

server.listen(3000);
console.log("Server started at localhost:3000\npress ctrl-c to terminate...");