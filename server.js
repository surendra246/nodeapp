const http = require('http')
const message = 'Hello World from Node\n'

// Configure our HTTP server to respond with Hello World to all requests.
const server = http.createServer(function (request, response) {
  console.log('responding with hello')
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end(message)
})

const port = process.env.PORT || 8080
server.listen(port)

console.log('Server running at port', port)
console.log(message)