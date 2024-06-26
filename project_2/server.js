const http = require('http');
const axios = require('axios');
const url = require('url');
const fs = require('fs');

const file = fs.readFileSync('index.html', 'utf8');

const apiKey = '15facce67a51ac42cf416ee97a10bfc2';
const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather';

const getWeather = async (city) => {
    try {
        const response = await axios.get(`${weatherAPI}?q=${city}&appid=${apiKey}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const server = http.createServer(async (req, res) => {
    if (req.url === '/') {
        res.end(file);
    } else if (req.url.startsWith('/weather')) {
        const queryObject = url.parse(req.url, true).query;
        const city = queryObject.city;

        if (city) {
            const weatherData = await getWeather(city);

            if (weatherData) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(weatherData));
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error fetching weather data');
            }
        } else {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('City parameter is required');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server is running on http://127.0.0.1:3000');
});
