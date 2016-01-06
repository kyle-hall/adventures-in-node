
var http = require('http'),
    fs = require('fs');

var server = http.createServer(function (req, res) {
  var readStream = fs.createReadStream(process.argv[3]);
  
  var result = "";
  readStream.setEncoding("utf8");
  readStream.on("data", function (chunk) {
    result += chunk;
  });
  readStream.on("end", function () {
    res.end(result);
  });

  //Official Solution - code inside server declaration
  //res.writeHead(200, {'content-type': 'text/plain'});
  //fs.createReadStream(process.argv[3]).pipe(res);
});

server.listen(Number(process.argv[2]));