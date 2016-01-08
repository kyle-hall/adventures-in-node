
var express = require('express'),
      app = express();

app.set('port', process.env.PORT || 3000);

var handlebars = require('express-handlebars').create({defaultLayout: 'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  res.type('text/plain');
  res.send("Meadowlark Travel");
});

app.get('/about', function(req, res) {
  res.type('text/plain');
  res.send("About Meadowlark Travel");
});

//Custom 404 page
app.use(function (req, res) {
  res.type('text/plain');
  res.status(404);
  res.send("404 - Page Not Found");
});

//Custom 500 page
app.use(function (req, res) {
  res.type('text/plain');
  res.status(500);
  res.send("500 - Internal Server Error");
});

app.listen(app.get('port'), function () {
  console.log("Express server started on " + app.get('port') + "\nEnter Ctrl-C to terminate...");
});
