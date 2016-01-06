
var http = require('http');

var results = [],
    returnedCount = 0;

function printResults () {
  results.forEach(function (result) {
    console.log(result);
  });
}

function httpGet (index) {
  var result = "";
  http.get(process.argv[2 + index], function (res) {
    res.setEncoding("utf8");
    res.on("data", function(data) {
      result += data;
    });
    res.on("end", function () {
      results[index] = result;
      returnedCount++;
      if (returnedCount === 3) {
        printResults();
      }
    });
  });
}

for (var i = 0; i < 3; i++) {
  httpGet(i);
}