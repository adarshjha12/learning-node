let fs = require('fs')
let http = require('http')
let requests = require('requests')


let file = fs.readFileSync('index.html', 'utf-8')

let server = http.createServer( (req, res) =>{


    if (req.url === '/') {
        requests("https://api.openweathermap.org/data/2.5/weather?q=Patna&appid=15facce67a51ac42cf416ee97a10bfc2"), {streaming}
        .on('data', (chunk) =>{
            console.log(chunk);
        })
        .on('end', (err) =>{
           if (err) return console.log('connection closed due to error', err);
        })
    }
})

let port = 3000
server.listen(port, () =>{
    console.log(`server is running on ${port}`);
})