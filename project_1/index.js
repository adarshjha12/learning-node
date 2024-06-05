let fs = require('fs')
let http = require('http')
let requests = require('requests')


let file = fs.readFileSync('index.html', 'utf-8')

let server = http.createServer( (req, res) =>{


    if (req.url === '/') {
        requests("https://api.openweathermap.org/data/2.5/weather?q=Patna&appid=15facce67a51ac42cf416ee97a10bfc2

        ")
        .on('data', )
    }
})