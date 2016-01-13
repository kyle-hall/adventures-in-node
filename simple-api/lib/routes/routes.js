
var accountMaker = require("../mocks/mockAccount");

var appRouter = function (app) {
  app.get("/", function (req, res) {
    res.send("Hello, world");
  });

  app.get("/account", function (req, res) {
    var mockAccount = accountMaker("nraboy", "12343", "@nraboy");

    if (!req.query.username) {
      return res.send({"status": "error", "message": "missing username"});
    } else if (req.query.username !== mockAccount.username) {
      return res.send({"status": "error", "message": "wrong username"});
    } else {
      return res.send(mockAccount);
    }
  });

  app.post("/account", function(req, res) {
    if (!req.body.username || !req.body.password || !req.body.twitter) {
      return res.send({"status":"error", "message":"missing a parameter!"});
    } else {
      return res.send(req.body);
    }
  });
};

module.exports = appRouter;