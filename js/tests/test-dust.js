var template =
'{?people}' +
'  <h3>People</h3>' +
'  <ul>' +
'    {#people}' +
'      <li>{name}' +
'        <ul>' +
'          <li>{age}</li>' +
'          <li>{sex}</li>' +
'          <li>{hair}</li>' +
'        </ul>' +
'      </li>' +
'    {/people}' +
'  </ul>' +
'{/people}' +
'{?dogs}' +
'  <h3>Dogs</h3>' +
'  <ul>' +
'    {#dogs}' +
'    <li>{name}' +
'       {?age}' +
'        <ul>' +
'          <li>{age}</li>' +
'          <li>{sex}</li>' +
'          <li>{colour}</li>' +
'        </ul>' +
'       {/age}' +
'      </li>' +
'    {/dogs}' +
'  </ul>' +
'{/dogs}' +
'{?cats}' +
'  <h3>Cats</h3>' +
'{/cats}' +
'{?fish}' +
'{>snippet:./}' +
'{/fish}';

var snippet = 
'<p>A list of fish: ' +
'{#fish}' +
'{.}{@sep}, {/sep}' +
'{/fish}.' +
'</p>';

$(function(){  
  // Create view
  var TestView = Backbone.View.extend({
    el: '#run',

    events: {
      'click': 'render'
    },

    render: function() {
      var html, start, end, count = 0;
      
      start = new Date();     

      for(count; count < 100; count += 1) {        
        dust.loadSource(dust.compile(template, "test"));
        dust.loadSource(dust.compile(snippet, "snippet"));
        
        dust.render('test', data, function(err, out) {
          if(!err) {            
            html = out;
          }
        });
      }
       
      end = new Date();
      
      $('#output').html(html);

      $('#time').html(end.valueOf() - start.valueOf());
    }
  });

  var testView = new TestView();  
});