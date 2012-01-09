
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
        html = this.createHTML();
      }
      
      end = new Date();
      
      $('#output').html(html);

      $('#time').html(end.valueOf() - start.valueOf());
    },

    createHTML: function() {
      var html = '';
      var category, name, attribute;

      // Method to escape and Javascript strings that shouldn't be in our data...
      function escapeString(str) {
        return str.replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }

      function commaSeperatedList() {
        var snippet, length, subCount =0;

        snippet = 'A list of ' + category + ': ';

        length = data.data[category].length;

        for(subCount; subCount < length; subCount += 1) {
          snippet += data.data[category][subCount];

          // Add comma
          if(subCount < length) {
            snippet += ', ';
          }
        }

        return snippet;
      }
     
      // Iterate categories
      for(category in data.data) {
        if(data.data.hasOwnProperty(category)) {
          // Check category contains data
          if(!_.isEmpty(data.data[category])) {
            // Add heading
            html += '<h3>' + category + '</h3>';
            // Check it's not an array
            if(!data.data[category].length) {
              html += '<ul>';
              // Iterate members of category
              for(name in data.data[category]) {
                if(data.data[category].hasOwnProperty(name)) {
                  html += '<li>' + name;
                  // Check if member has attributes
                  if(!_.isEmpty(data.data[category][name])) {
                    html += '<ul>';
                    // Iterate attributes
                    for(attribute in data.data[category][name]) {
                      if(data.data[category][name].hasOwnProperty(attribute)) {
                        html += '<li>' + escapeString(data.data[category][name][attribute].toString()) + '</li>';
                      }
                    }
                  }
                }
              // Close attributes list
              html += '</ul></li>';
              }
            }
            // It's an array so handle differently
            else {
              html += '<p>' + escapeString(commaSeperatedList()) + '</p>';
            }
          // Close members list
          html +='</ul>';
          }
        }
      }
        
    return html;
    }
  });

  var testView = new TestView();
});