
var net = require('net');

function zeroFill (val) {
  while (val.length < 2) {
    val = "0" + val;
  }
  return val;
}

var server = net.createServer(function (socket) {
  var date = new Date();

  var year = date.getFullYear(),
      month = zeroFill((date.getMonth() + 1).toString()),
      day = zeroFill(date.getDate().toString()),
      hours = zeroFill(date.getHours().toString()),
      minutes = zeroFill(date.getMinutes().toString());

  var time = year + "-" + month + "-" + day + " " + hours + ":" + minutes;

  socket.end(time);
});

server.listen(Number(process.argv[2]));