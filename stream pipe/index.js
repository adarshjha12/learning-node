const fs = require('fs');

// Create a readable stream from a file
const readableStream = fs.createReadStream('read.txt');

// Create a writable stream to a file
const writableStream = fs.createWriteStream('write.txt');

// Pipe the readable stream to the writable stream
readableStream.pipe(writableStream);

// Handle events for when data is read or when the write operation finishes
readableStream.on('end', () => {
    console.log('Data reading finished.');
});

writableStream.on('finish', () => {
    console.log('Data writing finished.');
});



// another example. this time using http server

let http = require('http')

let server = http.createServer()

server.on('request', (req, res) => {
    let stream = fs.createReadStream('read.txt')

    stream.pipe(res)

})


server.listen(3000, () =>{
    console.log();
})