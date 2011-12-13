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
        html = example();
      }
      
      end = new Date();
      
      $('#output').html(html);

      $('#time').html(end.valueOf() - start.valueOf());
    }
  });

  var testView = new TestView();  

  var Router = Backbone.Router.extend({
    initialize: function() {
      $.get('/js/templates/templates.js');
    }
  });

  var router = new Router();
});