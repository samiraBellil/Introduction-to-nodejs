// function callback (response) { /* ... */ }  
// response.on('data', function (data) { /* ... */ }) 
// http.get()
// "data", "error" and "end"
//setEncoding()
 


//http_client
const http = require('http')

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)
