
var fs = require('fs'),
    path = require('path');

var filter = function (dir, ext, callback) {
  fs.readdir(dir, function (err, files) {
    if (err) {
      return callback(err);
    }
    
    extension = "." + ext;
    var result = files.filter(function (file) {
      return path.extname(file) === extension;
    });

    callback(null, result);
  });
};

module.exports = filter;