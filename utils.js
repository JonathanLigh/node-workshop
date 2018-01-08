var flags = require('flags');

flags.defineBoolean('u').
  setDescription('Changes joke to uppercase.');

flags.defineBoolean('q').
  setDescription('Adds quotations to output.');

function inCaps (string) {
  if (flags.get('u') === true){
    return string.toUpperCase();
  } else {
    return string;
  }
}

function inQuotes (string) {
  if (flags.get('q') === true){
    return '"' + string + '"';
  } else {
   return string;
  }
}

module.exports = {
  xTimes: function (jokeFunc, x) {
    var jokes = '';
    for (var i = 0; i < x; i++) {
      jokes +=  inQuotes(inCaps(jokeFunc()));
      if (i < x - 1) {
        jokes += '\n';
      }
    }
    return jokes;
  }
};
