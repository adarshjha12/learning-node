// reading data with stream

const http = require('http')
const fs = require('fs')


let server = http.createServer()

// reading data
// this will read data from your file and send it as a response to client.
// stream is very useful when you want to send data chunk by chunk( line by line)
// it will not send all data at once, it will send it line by line. this can reduce extra memory uses.

// when we used readfile previously, it was sending entire data at once. so that is difference between readfile() method vs createReadStream() method.

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
// this will write anything in your file

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