var express = require('express');
var serveStatic = require('serve-static');
 
var app = express();
 
app.use(serveStatic('./public', {'index': ['index.html', 'index.html']}));
console.log('App listening at port 3000');
app.listen(3000);
