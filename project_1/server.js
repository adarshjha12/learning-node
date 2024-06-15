let fs = require('fs')
let http = require('http')
let fetch = require('node-fetch')

let city = document.getElementById('text').value;
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=15facce67a51ac42cf416ee97a10bfc2`

let server = http.createServer()

async function fetchData() {
    try {
        let response = await axios.get('https://api.example.com/data');
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
