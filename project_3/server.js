let http = require('http')
let fs = require('fs')
let url = require('url')
let axios = require('axios')

let file = fs.readFileSync('index.html', 'utf-8')

let weatherAPI = '15facce67a51ac42cf416ee97a10bfc2';
let apiKey = 'https://api.openweathermap.org/data/2.5/weather';

let weather = async (city) =>{
    try {
        let response = await axios.get(`${weatherAPI}?q=${city}&appid=${apiKey}`)
    } catch (error) {
        console.log(error);
    }
}

let server = http.createServer( async (req, res) =>{
    if (req.url === '/') {
        res.writeHead(200, {'content-type' : 'text/html'})
        res.end(file)
    }
})


server.listen(3000, 'localhost', () =>{
    console.log('server is running on 3000');
})