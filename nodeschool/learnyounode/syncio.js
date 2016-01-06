
var fs = require('fs');

data = fs.readFileSync(process.argv[2], "utf8");

lines = data.split("\n").length;

console.log(lines - 1);