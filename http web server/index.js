// routing------------
// and web server


const http = require('http')

const server = http.createServer((req, res) => {

    if (req.url === '/'){
        res.end('hello, i am home page')

    } else if (req.url === '/contact'){
        res.end('i am contact page')

    }  else if (req.url === '/about'){
        res.end('i am about page')
    } else{
        res.writeHead(404, { "content-type" : "text/html"});
        res.end(" 404, not found ")

    }
})

server.listen(8000, '127.0.0.1', () =>{
    console.log('server created');
})

