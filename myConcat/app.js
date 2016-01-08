#!/usr/bin/env node
var fs = require('fs');

fs.readFile(process.argv[2], "utf8", function (err, data) {
  if (err) throw err;

  fs.appendFile(process.argv[3], "\n" + data, function (err) {
    if (err) throw err;
    console.log("The files have been successfully concatenated!");
  });
});