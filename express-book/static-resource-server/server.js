
var http = require('http'),
    fs = require('fs');

function serverStaticFiles(res, path, contentType, responseCode) {
  if (!responseCode) responseCode = 200;

  fs.readFile(__dirname + path, function (err, data) {
    if (err) {
      res.writeHead(500, {"Content-Type": "text/plain"});
      res.end("500 - Internal Server Error");
    }

    res.writeHead(responseCode, {"Content-Type": contentType});
    res.end(data);
  });
}

var server = http.createServer(function (req, res) {
  var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

  switch (path) {
    case '':
      serverStaticFiles(res, '/public/index.html', 'text/html');
      break;
    case '/about':
      serverStaticFiles(res, '/public/about.html', 'text/html');
      break;
    case '/img/logo.jpg':
      serverStaticFiles(res, '/public/img/logo.jpg', 'image/jpeg');
      break;
    default:
      serverStaticFiles(res, '/public/404.html', 'text/html', 404);
      break;
  }
});

server.listen(3000);
console.log("Server started at localhost:3000\npress ctrl-c to terminate...");