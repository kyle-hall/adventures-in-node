
var split = require('split'),
      through = require('through2'),
      tr = through(write, end);

var count = 0;
function write(buffer, encoding, next) {
  var line = buffer.toString();
  if (count % 2 === 0) {
    this.push(line.toLowerCase() + '\n');
  } else {
    this.push(line.toUpperCase() + '\n');
  }
  count++;
  next();
}

function end(done) {
  done();
}

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
