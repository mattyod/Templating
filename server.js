var express = require('express'),
    fs      = require('fs'),
    path    = require('path');

var app = express.createServer();
var baseUrl = '/web';


// Quick and dirty file server
app.get('*', function(req, res) {
  req.url = req.url === '/'? '/index.html' : req.url;
  req.url = baseUrl + req.url;
  
  path.exists(req.url.substr(1), function(exists) {
    if(exists) {
        console.log('Serving: ', req.url.substr(1));

        res.sendfile(req.url.substr(1), function(err) {
          if(err) {
            console.log(err);
          }
        });
        
    } else {
      console.log('File does not exist: ', req.url.substr(1));
    }
  });
});

app.listen(3000);

// We are up...
console.log('Server running on port 3000');