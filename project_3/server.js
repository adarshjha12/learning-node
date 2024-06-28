let http = require('http')
let fs = require('fs')
let url = require('url')
let axios = require('axios')

let file = fs.readFileSync('index.html', 'utf-8')

let weatherAPI = 'https://api.openweathermap.org/data/2.5/weather';
let apiKey = '15facce67a51ac42cf416ee97a10bfc2';

let weather = async (city) =>{
    try {
        let response = await axios.get(`${weatherAPI}?q=${city}&appid=${apiKey}`)
        return response.data
    } catch (error) {
        console.log(error);
    }
}

let server = http.createServer( async (req, res) =>{
    if (req.url === '/') {
        res.end(file)
    } else if (req.url.startsWith('/weather')) {
        let queryObject = url.parse(req.url, true).query
        let city = queryObject.city

        if (city) {
            let weatherData = await weather(city)

            if (weatherData) {
               res.end(JSON.stringify(weatherData))
               console.log(weatherData);
            } else{
                res.end('error fetching data');
            }
        } else{
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('enter city parameter')
        }
    } else{
        res.end('not found')
    }
})


server.listen(3000, 'localhost', () =>{
    console.log('server is running on 3000');
})