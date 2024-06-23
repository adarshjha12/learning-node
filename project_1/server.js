let fs = require('fs')
let http = require('http')
let axios = require('axios');
let url = require('url');


let file = fs.readFileSync('index.html', 'utf8')


let getWeatherData = async (city) =>{
    try {
        let response = await axios.get( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=15facce67a51ac42cf416ee97a10bfc2`
)
        return response.data
    } catch (error) {
        console.log('unable to fetch weather', error);
    }
}


let server = http.createServer( async (req, res) =>{
    if(req.url = '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.end(file)

    }
     else if(req.url.startsWith('/weather')){
        let queryObject = url.parse(req.url, true).query
        let city = queryObject.city

        if(city){
            let weatherData = await getWeatherData(city)

            if(weatherData){
                res.writeHead(200, {'contwnt-type': 'application/json'})
                res.end(JSON.stringify(weatherData))
                console.log(weatherData);
            }

            else{
                res.writeHead(500, {'content-type': 'text/plain'})
                res.end('error while fetching data')
            }
        }

        else{
            res.writeHead(400, {'content-type': 'text/plain'})
            res.end('unknown url entered')
        }
    }

    else{
        res.writeHead(404, {'content-type': 'text/plain'})
        res.end('not found')
    }

    })


let port = 3000
server.listen(port, () =>{
    console.log(`server is running on port ${port}`);
})