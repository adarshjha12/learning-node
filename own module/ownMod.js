function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function multi(a, b) {
    return a * b
}

let adarsh = 'programmer'

// long cut method to export

// module.exports.add = add
// module.exports.sub = sub
// module.exports.multi = multi


//destructuring or short cut method to export
module.exports = {add, sub, multi, adarsh}