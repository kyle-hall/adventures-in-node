
var request = require('request');

var res = request.post('http://localhost:8099/');

process.stdin.pipe(res).pipe(process.stdout);