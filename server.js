var http = require('http')
var home = require('./routes/home');
var todos = require('./routes/todos');

var server = http.createServer();
var port = '8080';
var address = 'http://localhost' + port;

function router(method, url, res) {
  switch(url) {
    case '/':
      return home(method, res);
    case '/todos':
      return todos(method, res);
    default:
      fs.readFile(path.join(__dirname, 'views', '404.html'), function(err, content) {
        res.end(content);
      });
  }
}

server.on('request', function(request, response) {
  var method = request.method;
  var url = request.url;
  var headers = request.headers;
  var body = [];

  request.on('data', function(chunk) {
    body.push(chunk);
    console.log(chunk);
  });

  request.on('error', function(err) {
    console.log(err.stack);
  });

  request.on('end', function() {
    response.setHeader('Content-Type', 'applicatoin/json');

    response.on('error', function(err) {
      response.statusCode = 500;
      res.end('Error: ', err)
    });

    var responseBody = {};
    responseBody.headers = headers;
    responseBody.method = method;
    responseBody.url = url;
    responseBody.body = body;
    response.write(JSON.stringify(responseBody));
    response.end()
  });

  router(method, url, response);
  // console.log(method);
  // console.log(url);
  // console.log(request);
});

server.listen(port);
console.log('Server listening on ' + address);
