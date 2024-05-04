// we can make our own module in node js. every file can be a module in node js.
// we can import them via require------

// let mod = require('./ownMod')
console.log(mod.add(12, 34));
console.log(mod.sub(42, 34));
console.log(mod.multi(12, 34));


// we can also do this below (destructuring method)
let {add, sub, multi} = require('./ownMod')

console.log(add(12, 34));
console.log(sub(42, 34));
console.log(multi(12, 34));