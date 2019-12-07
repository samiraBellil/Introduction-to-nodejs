
//To include the HTTP module, use the require() method

// var http = require('http');
// var fs = require('fs'); //file system
//le serveur doit écouter sur le port fourni par le premier argument du programme (process.argv [2])



 //Use the createServer() method to create an HTTP server:

 //HTTP File Server:

     
 var http = require('http')
 var fs = require('fs')
  
 var port = process.argv[2]
 var file = process.argv[3]
  
 http.createServer(function (request, response) {
   fs.createReadStream(file).pipe(response)
 }).listen(+port, function () {
   console.log('Server listening on http://localhost:%s', port)
 })

