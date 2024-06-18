let fs = require('fs')
let http = require('http')
let axios = require('axios');
let url = require('url');

let link = `https://api.openweathermap.org/data/2.5/weather?q=patna&appid=15facce67a51ac42cf416ee97a10bfc2`

let file = fs.readFileSync('index.html')


let getWeather = async () =>{

    try {
        let response = await axios.get(link)
        return response.data
    } catch (error) {
        console.log('unable to fetch weather', error);
    }
}


let server = http.createServer( async ())