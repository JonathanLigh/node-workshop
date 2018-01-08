module.exports.inCaps = function (string) {
  return string.toUpperCase();
}

module.exports.inQuotes = function (string) {
  return '"' + string + '"';
}

module.exports.xTimes = function (joke, x) {
  for (var i = 0; i < x; i++) {
    console.log(joke);
  }
}

