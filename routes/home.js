var fs = require('fs');
var path = require('path');

function home(method, res) {
  switch(method) {
    case 'GET':
      fs.readFile(path.join(__dirname, '..', 'views', 'index.html'), function( err, content) {
        res.end(content);
      })
  }
}

module.exports = home;
