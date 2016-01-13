
var accountMaker = function (name, pass, twit) {
  return {
    "username": name,
    "password": pass,
    "twitter": twit
  };
};

module.exports = accountMaker;