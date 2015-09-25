var express = require('express');
var serveStatic = require('serve-static');
 
var app = express();
 
app.use(serveStatic('./public', {'index': ['index.html', 'index.html']}));
app.listen(3000);
