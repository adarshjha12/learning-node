// events module have built in class and it is called EventEmitter.
// at first we reqire that class and create a new instance of EventEmitter.

let EventEmitter = require('events')

let event = new EventEmitter()


event.on('anyEvent', (title, team) =>{
    console.log(`we have ${title} titles, and we are ${team}`);
})

// we can use same event multiple times

event.on('anyEvent', (title, team) =>{
    console.log(`we have ${title} titles, and we are RR and ${team}`);
})
event.on('anyEvent', (title, team) =>{
    console.log(`we have ${title} titles, and we are RCB and ${team}`);
})
event.on('anyEvent', (title, team) =>{
    console.log(`we have ${title} titles, and we are MI and ${team}`);
})


event.emit('anyEvent', 5, 'csk')