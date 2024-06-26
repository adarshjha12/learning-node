let fs = require('fs')
let http = require('http')
let axios = require('axios');
let url = require('url');


// let file = fs.readFile('index.html', 'utf8')


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
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading the HTML file');
            } else {
                res.end(data);
            }

            let queryObject = url.parse(req.url, true).query
        let city = queryObject.city

        if(city){
            let weatherData =  getWeatherData(city)

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
        })
    } else if (req.url = '/styles.css') {
        // Serve the CSS file
        res.writeHead(200, { 'Content-Type': 'text/css' });
        fs.readFile('styles.css', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading the CSS file');
            } else {
                res.end(data);
            }
        });
    } 
    else {
        // Handle 404 - Not Found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
    
    if(req.url.startsWith('/weather')){
        let queryObject = url.parse(req.url, true).query
        let city = queryObject.city

        if(city){
            let weatherData =  getWeatherData(city)

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
})
//   else{
//         res.writeHead(404, {'content-type': 'text/plain'})
//         res.end('not found')
//     }




let port = 3000
server.listen(port, () =>{
    console.log(`server is running on port ${port}`);
})