// these are some example of npm packages. it allows us to write less code and get output fast.

let chalk = require('chalk');
let validator = require('validator');

console.log(chalk.green.inverse('hello'));

let email = 'adarsh@jha.com'
let response = validator.isEmail(email);

console.log(response ? chalk.green.inverse(response) : chalk.red.inverse(response));


// i have installed global package nodemon. it run our script automatically, without typing "node index.js" in cmd.

console.log(chalk.blue.inverse('adarsh kumar jha'));