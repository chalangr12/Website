var express = require('express');
var serveStatic = require('serve-static');
 
var app = express();
 
app.use(serveStatic('./', {'index': ['index.html', 'index.htm']}));
console.log('App listening at port 3000');
app.listen(3000);
