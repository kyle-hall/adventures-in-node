
var fs = require('fs'),
    path = require('path');

var extension = "." + process.argv[3];

fs.readdir(process.argv[2], function callback(err, files) {
  if (err) {
    console.log("An error occured: " + err);
  }

  files.forEach(function (file) {
    if (path.extname(file) === extension) {
      console.log(file);
    }
  });
});