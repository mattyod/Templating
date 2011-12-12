var template = 
'{{ for(var item in it.data) { }}' +
'  {{ if(typeof it.data[item] === "object" && !it.data[item].length) { }}' +
'    <h3>{{! item }}</h3>' +
'    {{ for(var member in it.data[item]) { }}' +
'      <ul>' +
'        <li>{{! member }}' +
'          {{ if(it.data[item][member].sex) { }}' +
'            <ul>' +
'              {{ for(var attribute in it.data[item][member]) { }}' +
'                <li>{{! it.data[item][member][attribute] }}</li>' +
'              {{ } }}' +
'            </ul>' +
'          {{ } }}' +
'        </li>' +
'      </ul>' +
'    {{ } }}' +
'  {{ } else { }}' +
'    <p>A list of fish: ' +
'      {{#def.snpt}}' +
'    </p>' +
'  {{ } }}' +
'{{ } }}';

var snippet =
'{{ var length = it.length; }}' +
'{{ _.each(it, function(val, key) { }}' +
'{{!val}}' +
'{{ if(key < (length-1)) {}}' +
', ' +
'{{} }}' +
'{{ }); }}' +
'.';


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
        // Compile template.
        var snpt = doT.template(snippet);
        
        var tmpl = doT.template(template, doT.templateSettings, {
          'snpt': snpt(data.data.fish)
        });
                
        html = tmpl(data);        
      }
      
      end = new Date();
      
      $('#output').html(html);

      $('#time').html(end.valueOf() - start.valueOf());
    }
  });

  var testView = new TestView();
});