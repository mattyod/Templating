var express  = require('express'),
    fs       = require('fs'),
    path     = require('path'),
    template = require('./lib/getTemplates'),
    http     = require('http');

var app = express.createServer();
var baseUrl = '/web';

// Get and create the templates
template();

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
      res.send('File not found.', 404);
    }
  });
});

app.listen(1337);

// We are up...
console.log('Server running on port 1337');