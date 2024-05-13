// reading data with stream

const http = require('http')
const fs = require('fs')


let server = http.createServer()

// reading data

server.on('request', (req, res ) =>{

    let stream = fs.createReadStream('abc.txt')
     stream.on('data', (chunkData) =>{
         res.write(chunkData)
    })

    stream.on('end', () =>{
         res.end()
     })

     stream.on('error', (err) =>{
         console.log(err);
         res.end('file not found')
     })


})

// writing data


// server.on('request', (req, res ) =>{

//     let stream = fs.createWriteStream('write.txt')

//     stream.write('hello world')
//     stream.end()

//     stream.on('finish' , () =>{
//         res.end('Data has been written to the file');
//     })

// })


let port = 3000
server.listen(port, () =>{
    console.log(`server is running on ${port}`);
})