var jade = require('jade'),
    fs   = require('fs');

function isEmpty(ob){
   for(var i in ob){ return false;}
  return true;
}

module.exports = function() {
  // Sync so we can get this up and running quick and dirty
  var template = fs.readFileSync('./templates/example.jade', 'binary');
  
  var path = './templates/example.jade';

  var compiled = jade.compile(template, {client: true, filename: path});
  
  var fileString = 'var example = ' + compiled.toString();

  fs.writeFile('./web/js/templates/templates.js', fileString, function (err) {
    if (err) throw err;
    console.log('Templates written to /web/js/templates/templates.js');
  });
};