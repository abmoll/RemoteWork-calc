//var splitStr = process.argv[2].split("").reverse().join("");
//console.log(splitStr);

var http = require('http')
var httpServer = http.createServer(function(request, response) {
  console.log("We got a request!")
  console.log(request)
  if (request.method === "GET" && request.url === '/') {
    response.writeHead(200, {
      'Content=Type': 'text/plain'
    })
  }
  response.end("<h2>Hello World</h2>")
} else if (request.method === "GET" && request.url === '/about') {
  response.writeHead(200, {
    'Content-Type': 'text/html'
  })
  response.end("<h2>All about this website.<h1>")
}
})

httpServer.listen(8080, function() {
  console.log("listening on port 8080")
})
