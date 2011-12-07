var template =
'{{#if people}}\n' +
'  <h3>People</h3>\n' +
'  {{#each people}}\n' + 
'    <ul>\n' +
'      <li>{{name}}\n' +
'        <ul>\n' +
'          <li>{{age}}</li>\n' +
'          <li>{{sex}}</li>\n' +
'          <li>{{hair}}</li>\n' +
'        </ul>\n' +
'      </li>\n' +
'    </ul>\n' +
'  {{/each}}\n' +
'{{/if}}\n' +
'{{#if dogs}}\n' +
'  <h3>Dogs</h3>\n' +
'  {{#each dogs}}\n' + 
'    <ul>\n' +
'      <li>{{name}}\n' +
'        {{#if age}}\n' +
'          <ul>\n' +
'            <li>{{age}}</li>\n' +
'            <li>{{sex}}</li>\n' +
'            <li>{{colour}}</li>\n' +
'          </ul>\n' +
'        {{/if}}\n' +
'      </li>\n' +
'    </ul>\n' +
'  {{/each}}\n' +
'{{/if}}\n' +
'{{#if cats}}\n' +
'  <h3>Cats</h3>\n' +
'{{/if}}\n' +
'{{#if fish}}\n' +
'{{> fish}}\n' +
'{{/if}}';


var snippet = 
'<p>A list of fish: \n' +
'  {{#commaSeperatedList fish}}\n' +
'  {{/commaSeperatedList}}.\n' +
'</p>';

var getSnippet = function(data) {
  return _.template(snippet, data);
};

$(function(){
  // Put data into a backbone model
  var Test = Backbone.Model.extend(data);
  
  var test = new Test();
  
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
            
        Handlebars.registerHelper('commaSeperatedList', function(context, fn) {
          var length, list = ' ';

          length = context.length -1;

          _.each(context, function(val, key) {
            // Had some trouble getting the 'fn' to work here so simply adding to the string directly
            // This means we need to escape ourselves...
            list += val.replace(/</g, '&lt;')
              .replace(/>/g, '&gt;');

            if(key < length) {
              list += ', ';
            }
          });

          return list;
        });

        Handlebars.registerPartial("fish", snippet);
        var compiled = Handlebars.compile(template);
        
        html = compiled(data);
    }
       
      end = new Date();
      
      $('#output').html(html);

      $('#time').html(end.valueOf() - start.valueOf());
    }
  });

  var testView = new TestView();

  var output = template.replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  var output2 = snippet.replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  $('#template').html(output);
  $('#snippet').html(output2);
});