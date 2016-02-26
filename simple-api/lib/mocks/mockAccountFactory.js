
var accountMaker = require('./mockAccount');

function MockAccountFactory(numOfAccounts) {
  var accounts = [];
  for (var i = 0; i < numOfAccounts; i++) {
    var name = "";
    var password = "";
    var twitter ="";
    accounts.push(accountMaker(name, password, twitter));
  }
  return accounts;
}

module.exports = MockAccountFactory;
