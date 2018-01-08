var kkjoke = require('knock-knock-jokes');
var oneLinerJoke = require('one-liner-joke');

module.exports = {
  createKnockKnock: function() {
    return kkjoke();
  },
  createOneLiner: function() {
    return oneLinerJoke.getRandomJoke().body;
  }
};
