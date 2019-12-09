var myModule = require("./mymodule");
var dir = process.argv[2];
var ext = "." + process.argv[3];
myModule(dir, ext, function (err, list) {
    if (err) {
        return console.error('erreur', err);
    }
    list.forEach(file => {
        console.log(file);
    });
})