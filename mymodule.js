const fs = require('fs')
var path = require('path')

module.exports = (dir, ext, callback) => {
    fs.readdir(dir, function (err, files) {
        if (err) {
            callback(err)
        }
        files = files.filter(file => {
            if (file === undefined ) return null;
            return (path.extname(file) === ext)
            
        })
        callback(null, files)
        })       
    }
