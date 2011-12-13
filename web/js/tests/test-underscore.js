var template = 
'<% _.each(data, function(val, key) { %>\n' +
'  <% if(!$.isArray(val) && !_.isEmpty(val)) { %>\n' +
'    <h3><%- key %></h3>\n' +
'      <ul>\n' +
'        <% _.each(val, function(subVal, subKey) { %>\n' +
'          <li><%- subKey %>\n' +
'            <% if(!_.isEmpty(subVal)) { %>\n' +
'              <ul>\n' +
'                <% _.each(subVal, function(attribute) { %>\n' +      
'                  <li><%- attribute %></li>\n' +
'                <% }); %>\n' +
'              </ul>\n' +
'            <% } %>\n' +
'         </li>\n' +
'       <% }); %>\n' +
'    </ul>\n' +
'  <% } %>\n' +
'<% }); %>\n' +
'<%= getSnippet(data) %>';

var snippet =
'<p>A list of fish: \n' +
'  <% var length = fish.length; %>\n' +
'  <% _.each(fish, function(val, key) { %>\n' +
'    <%- val %>' +
      '<% var punctuation = key < (length -1)? ", " : "."; %>' +
      '<% print(punctuation); %>\n' +
'  <% }); %>\n' +
'</p>';

var getSnippet = function(data) {
  return _.template(snippet, data);
};

$(function() {
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
        // N.B. Would usually cache the template call before rendering but we want a true performance test
        html = _.template(template, data);
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