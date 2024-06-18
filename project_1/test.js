const url = require('url');
const querystring = require('querystring');

const myURL = 'http://localhost:3000/weather?city=Patna&units=metric';

const parsedURL = url.parse(myURL, true).query;
// url.parse(req.url, true).query;
// const parsedQuery = querystring.parse(parsedURL.query);

console.log(parsedURL);
