var http = require('http')

var server = http.createServer();
var port = '8080';
var address = 'http://localhost' + port;

server.on('request', function(request, response) {
  var method = request.method;
  var url = request.url;
  var headers = request.headers;
  console.log(method);
  console.log(url);
  console.log(request);
});

server.listen(port);
console.log('Server listening on ' + address);
