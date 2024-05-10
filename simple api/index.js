
// making api

const http = require('http')
const fs = require('fs')

const server = http.createServer( (req, res) => {

    // res.writeHead(200, {'content-type' : 'text/html'})
    // res.end('server saying hello')

if (req.url === '/') {
      res.writeHead(200, { 'content-type' : 'text/html'})
        res.end('server saying hello')

} else if (req.url === '/about') {
        res.end('server saying about page')

}   else if (req.url === '/contact') {
        res.end('server saying contact page')

} else if (req.url === '/api') {
    fs.readFile(`api.json`, 'utf-8', (err, data) =>{

        res.writeHead(200, { 'content-type' : 'text/JSON'})

        // let objData = JSON.parse(data)
        // res.end(JSON.parse(data))
        // data.replace("\r\n", '');
        let jsonResponse = JSON.parse(data);
        let modifiedResponse = JSON.stringify(jsonResponse);
        res.end( modifiedResponse);
    })

} else {
    res.writeHead(404, { 'content-type' : 'text/html'})
    res.end('404 not found')
}

})

let port = 3000;
server.listen(port, () =>{
    console.log(`server running on ${port}` );
})