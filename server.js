var express = require('express');
var serveStatic = require('serve-static');
 
var app = express();
 
<<<<<<< HEAD
app.use(serveStatic('./public', {'index': ['index.html', 'index.html']}));
=======
app.use(serveStatic('./', {'index': ['index.html', 'index.htm']}));
console.log('App listening at port 3000');
>>>>>>> bd7d4f51acef2a4103561ecd024839468ac47f95
app.listen(3000);
