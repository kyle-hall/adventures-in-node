
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var routes = require('./routes/routes.js')(app);

var server = app.listen(3000, function() {
  console.log("Listening on port 3000...");
});