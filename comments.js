// Create web server
// Create a web server that listens to incoming requests on port 3000. When a request is received, the server should send a response that includes the following:
// The status code of the response should be 200.
// The response should include a header with the key Content-Type and the value application/json.
// The response should include a JSON string with the following key-value pairs:
// key: message, value: Hello, this is a JSON response.

var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end('{"message": "Hello, this is a JSON response"}');
});

server.listen(3000);