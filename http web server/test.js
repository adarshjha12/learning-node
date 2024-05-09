let http = require('http')

let server = http.createServer( (req, res) => {

  if (req.url === '/') {
    res.end('welcome home!')
  } else if (req.url === '/about'){

    res.end('welcome about!')
  }
   else if (req.url === '/contact'){

    res.end('welcome contact!')
  } else{
    res.writeHead(404, {'content-type' : 'text/html'})
    res.end('404 not found')
  }
})


// satrting server

// 1st method
// server.listen(4000, "127.0.0.1", () => {
//   console.log("listening on 4000");
// })


// 2nd method

let port = 3000;
server.listen(port, () =>{
  console.log(`Server is listening on port ${port}`);

} )