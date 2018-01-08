
In this workshop, we hope to introduce the concepts of initializing a node project, installing node packages using npm, exporting functions from a file, requiring from installed packages and relative file paths, and using flags with to pass arguments and values from your terminal to your code's logic.

Because there are many different ways to satisfy this workshop's requirements, the directions will be purposefully vague; however, if you feel lost feel free to ask either Jason or Jonathan for help, or peak a the solution branch on this repository (we highly recommend not looking unless absolutely stuck).

## Step 1: Setup

Even though you probably already did this, make sure to `fork` the node-workshop repository from my repository in the upper right corner of this screen.

### First of all, we want to initialize the Node enviorment and install all of the node packages you'll be using in this workshop.

Run `npm init` in your project directory (don't worry about most of the options, for the purposes of this workshop they don't matter, just say press enter to say yes to all the defaults).

Now install all the node packages we will be using for this project (`flags`, `knock-knock-jokes`, `one-liner-joke`).

Here are links to their documentation:
* https://www.npmjs.com/package/flags
* https://www.npmjs.com/package/knock-knock-jokes
* https://www.npmjs.com/package/one-liner-joke

Hint: `npm install --save <package_name>` will install the `<package_name>` package to your `node_modules` folder in your directory. the `--save` is a flag will add it to your `package.json` file, which keeps track of your project dependencies.

## Step 2: Scaffolding the Workshop

### Create `main.js`, `utils.js`, and `jokeHandler.js` files in your project directory.

`main.js` will be the file you run in the terminal.

`utils.js` will contain helper functions that you will need to use in main.js

`jokeHandler.js` will be where you format the jokes from the two joke packages into uniform strings.

Hint: If you want to stop manually creating in your file editor or file system, try `touch example.js` command to create `example.js` file.

## Step 3: Logging Out Your First Jokes

### Before you begin take a look at the Node documentation for modules (another term for the files of a Node project) https://nodejs.org/api/modules.html

### Require the both joke modules in your jokeHandler.js file.

### Then, export the jokes as functions for each type. Remember to read the documentation for each module to understand how they are used and what they return.

The functions you export will want to _ONLY_ return a string of the joke generated.

### Then, in main.js, require the relative file path of your jokeHandler.js file and set it to a variable.

Now you should be able to invoke the functions you exported from jokeHandler.js. 

Try logging the joke functions you required onto the console using `console.log(jokeHandler.createKnockKnock())` where `jokeHandler` is the variable we set the require to and `createKnockKnock` is one of the functions we export from jokeHandler. 

Note: Your variable names might be different.

Hint: Remember the difference between `require('./<some_package>');` and `require('<some_package>');`

## Step 4: Controlling What Gets Logged With the Flags Module

### Please look over read the flags docs: https://www.npmjs.com/package/flags before continuing.

### Create a flag that controls whether a knock-knock or a one-liner is printed. Let's handle this logic in `main.js`.

#### In order to do this you'll need to:
1. define what the string argument is called for your flag
2. call `flags.parse` after initializing all of your flags
3. add our new flag to your run command to test if it works

### Now go to our currently neglected `utils.js` and export:
1. a function that makes a joke all uppercase letters.
2. a function that puts the whole joke in quotations.
3. a function that prints a joke `x` times.

### Finally, add three new flag arguments back in `main.js` based on the utils functions you just added.
1. add a Boolean flag that makes a joke uppercase.
2. add a Boolean flag that puts a joke in quotes.
3. add an Integer flag that prints the joke `x` times.

Now connect it all together!

A working project would be able to run all those flags simultaneously, e.g. `node main --jokeType='oneliner' --quotes --uppercase --x=4` would print the one-liner joke 4 times in succession and each in quotes and uppercase.

If you feel confident with your implementation, call either of us over and we'll check your solution and give you another  challenge to consider.
