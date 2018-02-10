var fs = require('fs');
var path = require('path');
var ejs = require('ejs');

function todos(method, res) {
  switch(method) {
    case 'GET':
      var todos = ['Learn Node', 'Learn Rack', 'Learn Rails', 'Profit']
      var html = fs.readFileSync(path.join(__dirname, '..', 'views', 'todos.ejs'), 'utf8')
      var content = ejs.render(html, { todos: todos })
      res.end(content);
  }
}

module.exports = todos;
