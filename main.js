var jokes = require('./jokeHandler');
var utils = require('./utils');
var flags = require('flags');

flags.defineString('jokeType').
    setDescription('Specifies the type of joke');

flags.defineInteger('x').
  setDescription('The number of times we want to print the joke').
  setDefault(1).
  setValidator(function(input) {
    if (input <= 0) {
      throw Error('Integer must not be less than 1.');
    }
  });

flags.defineBoolean('uppercase').
  setDescription('Changes joke to uppercase.');

flags.defineBoolean('quotes').
  setDescription('Adds quotations to output.');

flags.parse();

var joke = '';

if (flags.get('jokeType') === 'knockknock') {
  joke = jokes.createKnockKnock();
} else if (flags.get('jokeType') === 'oneliner') {
  joke = jokes.createOneLiner();
} else {
  console.error('incorrect input flags provided');
  process.exit(0); // This exits our JavaScript process immediately
}

if (flags.get('uppercase')) joke = utils.inCaps(joke);
if (flags.get('quotes')) joke = utils.inQuotes(joke);

utils.xTimes(joke, flags.get('x'));
