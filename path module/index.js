// this module used to view file name, directory name, extension name of the given path.

let path = require('path')

let newPath =  path.parse('C:/Users/jhaa5/Desktop/learning node/path module/index.js');
console.log(newPath.name);
console.log(newPath.root);


console.log(path.extname('C:/Users/jhaa5/Desktop/learning node/path module/index.js'));
console.log(path.basename('C:/Users/jhaa5/Desktop/learning node/path module/index.js'));
console.log(path.dirname('C:/Users/jhaa5/Desktop/learning node/path module/index.js'));
