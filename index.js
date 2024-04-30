let file = require('fs')
file.writeFileSync('read.txt', 'welcome to node js')

file.appendFileSync('read.txt', ' adarsh jha')

let abc = file.readFileSync('read.txt')
console.log(abc.toString());

let xyz = file.renameSync('read.txt', 'readWrite.txt')