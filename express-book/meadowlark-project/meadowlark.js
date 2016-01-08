
var express = require('express'),
      app = express();

app.set('port', process.env.PORT || 3000);

var handlebars = require('express-handlebars').create({defaultLayout: 'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/about', function(req, res) {
  res.render('about');
});

//Custom 404 page
app.use(function (req, res) {
  res.status(404);
  res.render('404');
});

//Custom 500 page
app.use(function (req, res) {
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function () {
  console.log("Express server started on " + app.get('port') + "\nEnter Ctrl-C to terminate...");
});
