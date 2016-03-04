
var ws = require('websocket-stream'),
    stream = ws('ws://localhost:8099');

stream.pipe();