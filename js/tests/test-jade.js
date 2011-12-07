var template = '';
var snippet = '';

$(function() {
  // Create view
  var TestView = Backbone.View.extend({
    el: '#run',

    events: {
      'click': 'render'
    },

    render: function() {
      var html, start, end, count = 0;      
      template = $('#template').html().toString();
      snippet = function() {return jade.render($('#snippet').html());};
      
      start = new Date();

      for(count; count < 100; count += 1) {    
        html = jade.render(template, {locals: snippet});
      }
      
      var end = new Date();
      
      $('#output').html(html);

      $('#time').html(end.valueOf() - start.valueOf());
    }
  });

  var testView = new TestView();  
});