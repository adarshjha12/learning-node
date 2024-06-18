let fs = require('fs')
let http = require('http')
let axios = require('axios');
let urlModule = require('url');

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=15facce67a51ac42cf416ee97a10bfc2`

console.log(document);
let file = fs.readFileSync('index.html')
let text = document.getElementById('text')


let getWeather = async () =>{

    try {
        let response = await axios.get(url)
    } catch (error) {
        console.log('unable to fetch weather', error);
    }
}