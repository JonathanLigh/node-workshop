
In this workshop, we hope to introduce the concepts of initializing a node project, installing node packages using npm, exporting functions from a file, requiring from installed packages and relative file paths, and using flags with to pass arguments and values from your terminal to your code's logic.

Because there are many different ways to satisfy this workshop's requirements, the directions will be purposefully vague; however, if you feel lost feel free to ask either Jason or Jonathan for help, or peak a the solution branch on github.

## Step 1: Setup

Eventhough you probably already did this, make sure to `fork` the node-workshop repository from my github.

### First of all, we want to initialize the Node enviorment and install all of the node packages you'll be using in this workshop.

Run `npm init` in your project directory (don't worry about most of the options, for the purposes of this workshop they don't matter).

Now install all the node packages we will be using for this project ('flags', 'knock-knock-jokes', 'one-liner-jokes').

Here are links to their documentation:
https://www.npmjs.com/package/flags
https://www.npmjs.com/package/knock-knock-jokes
https://www.npmjs.com/package/one-liner-joke

Hint: `npm install --save flags` will install the 'flags' packages to your node_modules folder in your directory. the `--save` will add it to your package.json file which keeps track of your project dependencies.

## Step 2: Scaffolding the Workshop

### Create main.js, utils.js, and jokeHandler.js files in your project directory.

main.js will be the file you run in the terminal.

utils.js will contain helper functions that you will need to use in main.js

jokeHandler.js will be where you format the jokes from the two joke packages into uniform strings.

## Step 3: Logging Out Your First Jokes

### Before you begin take a look at the Node documentation for modules (another term for the files of a Node project) https://nodejs.org/api/modules.html

### Require the both joke modules in your jokeHandler.js file.

### Then, export the jokes as functions for each type.

The functions you export will want to return a string of the joke generated.

### Then, in main.js, require the relative file path of your jokeHandler.js file and set it to a variable.

Now you should be able to invoke the functions you exported from jokeHandler.js. Try logging the joke functions you required onto the console using `console.log(jokeHandler.createKnockKnock())` where jokeHandler is the variable we set the require to and createKnockKnock() is one of the functions we export from jokeHandler.

Hint: `require('./jokeHandler');`

## Step 4: Controlling What Gets Logged With the Flags Module

### I really recommend reading the flags docs: https://www.npmjs.com/package/flags before continuing.

### Create a flag that controls whether a knock-knock or a one-liner is printed.

#### In order to do this you'll need to:
1. define what the string argument is called
2. call `flags.parse` after initializing all of your flags
3. add `--jokeName='knockknock'` to your run command

### Now go to utils.js and make:
1. a function that makes a joke all uppercase.
2. a function that puts the whole joke in quotations.
3. a function that invokes 3 different jokes (this can be an especially challenging one).

You can choose which functions get exported and which do not.

### Finally, add three new flag arguments based on the utils functions you just added.
1. add a Boolean flag that makes a joke uppercase.
2. add a Boolean flag that puts a joke in quotes.
3. add an Integer flag that prints the joke x times.

A working project would be able to run all those commands simultaneously, e.g. `node main.js --jokeType='oneliner' --quotes --uppercase --x=4` would print 4 different one-liners in succession and each in quotes and uppercase (because these libraries print random jokes, it's possible that two jokes in a batch could be the same, dont worry about this case).

If you feel confident with your implementation, call either of us over and we'll check your solution and give you another  challenge to consider.
