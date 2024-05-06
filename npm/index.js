// these are some example of npm packages. it allows us to write less code and get output fast.

let chalk = require('chalk');
let validator = require('validator');

console.log(chalk.green.inverse('hello'));

let email = 'adarsh@jha.com'

console.log(validator.isEmail(email));