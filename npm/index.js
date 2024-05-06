// these are some example of npm packages. it allows us to write less code and get output fast.

let chalk = require('chalk');
let validator = require('validator');

console.log(chalk.green.inverse('hello'));

let email = 'adarshjha.com'
let response = validator.isEmail(email);

console.log(response ? chalk.green.inverse(response) : chalk.red.inverse(response));