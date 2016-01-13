
var express = require('express'),
      app = express(),
      fortunes = require('./lib/fortune'),
      bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3000);

var handlebars = require('express-handlebars').create({defaultLayout: 'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(bodyParser.urlEncoded({"extended": true}));

app.use(function (req, res, next) {
  res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
  next();
});

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/about', function(req, res) {
  res.render('about', {
    fortune: fortunes.getFortune(),
    pageTestScript: 'tests/tests-about.js'
  });
});

app.get('/newsletter', function(req, res) {
  res.render('newsletter', {csrf: 'CSRF token goes here'});
});

app.post('process', function (req, res) {
  console.log("Form (from querystring): " + req.query.form);
  console.log("CSRF token (from hidden form field): " + req.body._csrf);
  console.log("Name (from visible form field): " + req.body.name);
  console.log("Email (from visible form field): " + req.body.email);
  res.redirect(303, '/thank-you');
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
