const path = require('path')

constol.log(__filename)
// The default operation of the path module varies based on the operating system on which a Node.js application is running.
console.log(path.basename(__filename))
// The path.dirname() method returns the directory name of a path, similar to the Unix dirname command. 
console.log(path.dirname(__filename))
// he path.extname() method returns the extension of the path, from the last occurrence of the . (period) character to end of string in the last portion of the path. If there is no .
console.log(path.extname(__filename))

console.log(path.parse(__filename))

console.log(path.join(__dirname, 'test', 'second.html'))
console.log(path.resolve(__dirname, './test', '/second.html'))