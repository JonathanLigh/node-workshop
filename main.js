var kkjoke = require('./kkjokeHandler');
var oljoke = require('./onelinerjokehandler');
var utils = require('./utils');
var flags = require('flags');


if (process.argv[2] === 'knockknock') {
  console.log(kkjoke.create());
} else if (process.argv[2] === 'oneliner') {
  console.log(oljoke.create());
} else {
  console.log('incorrect input provided');
}
