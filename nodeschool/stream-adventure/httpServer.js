var http = require('http'),
    through = require('through2'),
    tr = through(write, end);

var server = http.createServer(function (req, res) {
    if (req.method === "POST") {
        req.pipe(tr).pipe(res);
    } else {
        res.end();
    }
});

server.listen(process.argv[2]);

function write(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
}

function end(done) {
    done();
}