module.exports = {
  inCaps: function(string) {
    return string.toUpperCase();
  },
  printXJokes: function (jokeFunc, n) {
    for (var i = 0; i < n; i++) {
      console.log(jokeFunc());
    }
  }
};
