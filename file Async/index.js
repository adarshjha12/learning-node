// creating folder async......

let fs = require('fs')

// fs.mkdir('abc', (err) => {
//     console.log('folder created successfully');
//     console.log(err);
// })


//creating file----------------

// fs.writeFile('abc/abc.txt', 'hello javascript', (err) => {
//     console.log('file created successfully');
//     console.log(err);
// })

//reading file-----------------

// fs.readFile('abc/abc.txt','utf-8', (err, data) => {
//     console.log(data);
//     console.log(err);
// })

// renaming file-----------

// fs.rename('abc/abc.txt','abc/xyz.txt', (err) => {
//     console.log('renamed successfully');
//     console.log(err);
// })

//deleting file----------

// fs.unlink('abc/xyz.txt', (err) => {
//     console.log('unlinked successfully');
//     console.log(err);
// })


// deleting folder-----------

// fs.rmdir('abc', (err) => {
//     console.log('deleted folder successfully');
//     console.log(err);
// })