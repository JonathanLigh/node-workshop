var oneLinerJoke = require('one-liner-joke');

module.exports = {
  create: function () {
    return oneLinerJoke.getRandomJoke().body;
  }
};
