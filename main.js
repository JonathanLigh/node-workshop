var joke = require('./jokeHandler');
var utils = require('./utils');
var flags = require('flags');

flags.defineString('jokeType').
    setDescription('Specifies the type of joke');

flags.defineInteger('n').
  setDescription('The number of times we want to print the joke').
  setDefault(1).
  setValidator(function(input) {
    if (input <= 0) {
      throw Error('Integer must not be less than 1.');
    }
  });
flags.parse();

if (flags.get('jokeType') === 'knockknock') {
  console.log(utils.xTimes(joke.createKnockKnock,
    flags.get('n')));
} else if (flags.get('jokeType') === 'oneliner') {
  console.log(utils.xTimes(joke.createOneLiner,
    flags.get('n')));
} else {
  console.log('incorrect input flags provided');
  process.exit(0);
}
