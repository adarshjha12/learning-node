// const url = require('url');
// const querystring = require('querystring');

// const myURL = 'http://localhost:3000/weather?city=Patna&units=metric';

// const parsedURL = url.parse(myURL, true).query;
// // url.parse(req.url, true).query;
// // const parsedQuery = querystring.parse(parsedURL.query);

// console.log(parsedURL);


// fetch(`https:api.openweathermap.org/data/2.5/weather?q=patna&appid=15facce67a51ac42cf416ee97a10bfc2`
// )
// .then((Response) => console.log(Response))
// .catch((Error) => console.log(Error));


async function aaaaa () {
    try {
     let abvc = await fetch('https:api.openweathermap.org/data/2.5/weather?q=patna&appid=15facce67a51ac42cf416ee97a10bfc2')
   let data = await abvc.json()
   console.log(data);
    } catch (error) {
     console.log(error);
    }
 }

 aaaaa()