const fs = require('fs')


let obj = {
    name: 'adarsh',
    age: 22,
    loggedIn: true
}

let jsonData = JSON.stringify(obj)

// creating new file

fs.writeFile( 'new.json', jsonData, (err) => {
    console.log('file created successfully');
    console.log(err);
})

// reading new file and converting to object

fs.readFile('new.json', 'utf-8', (err, data) =>{

    let parseData = JSON.parse(data)
    console.log(data);
    console.log(parseData);
})