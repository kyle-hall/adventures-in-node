#!/usr/bin/env node
var fs = require('fs');

if (process.argv[2][0] === "-") {
  //check if it's the directory flag
  if (process.argv[2][1] === "d") {
    //concatenate all files in process.argv[4] to process.argv[3]
    //read the directory and then asynchronously read each one
    //once all of the files have been read, concatenate them, one by one
  }
}

fs.readFile(process.argv[2], "utf8", function (err, data) {
  if (err) throw err;

  fs.appendFile(process.argv[3], "\n" + data, function (err) {
    if (err) throw err;
    console.log("The files have been successfully concatenated!");
  });
});
