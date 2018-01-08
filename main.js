var kkjoke = require('./kkjokeHandler');
var oljoke = require('./onelinerjokehandler');

if (process.argv[2] === 'knockknock') {
  console.log(kkjoke.create());
} else if (process.argv[2] === 'oneliner') {
  console.log(oljoke.create());
} else {
  console.log('incorrect input provided');
}
