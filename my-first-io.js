const fs = require('fs')

var contenu = fs.readFileSync(process.argv[2])
var newlines = contenu.toString().split('\n').length-1
console.log(newlines);