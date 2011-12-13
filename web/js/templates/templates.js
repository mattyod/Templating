var example = function anonymous(locals, attrs, escape, rethrow) {
var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
var __ = [{ lineno: 1, filename: "./templates/example.jade" }];
try {
var buf = [];
with (locals || {}) {
var interp;
__.unshift({ lineno: 1, filename: __[0].filename });
__.unshift({ lineno: 1, filename: __[0].filename });
 for (var item in data.data)
{
__.unshift({ lineno: 2, filename: __[0].filename });
__.unshift({ lineno: 2, filename: __[0].filename });
 if (!data.data[item].length && !_.isEmpty(data.data[item]))
{
__.unshift({ lineno: 3, filename: __[0].filename });
__.unshift({ lineno: 3, filename: __[0].filename });
buf.push('<h3>');
var __val__ = item
buf.push(escape(null == __val__ ? "" : __val__));
__.unshift({ lineno: undefined, filename: __[0].filename });
__.shift();
buf.push('</h3>');
__.shift();
__.unshift({ lineno: 5, filename: __[0].filename });
buf.push('<ul>');
__.unshift({ lineno: undefined, filename: __[0].filename });
__.unshift({ lineno: 5, filename: __[0].filename });
 for (var name in data.data[item])
{
__.unshift({ lineno: 6, filename: __[0].filename });
__.unshift({ lineno: 6, filename: __[0].filename });
buf.push('<li>');
var __val__ = name 
buf.push(escape(null == __val__ ? "" : __val__));
__.unshift({ lineno: 7, filename: __[0].filename });
__.unshift({ lineno: 7, filename: __[0].filename });
buf.push('<ul>');
__.unshift({ lineno: undefined, filename: __[0].filename });
__.unshift({ lineno: 8, filename: __[0].filename });
 for (var attribute in data.data[item][name])
{
__.unshift({ lineno: 9, filename: __[0].filename });
__.unshift({ lineno: 9, filename: __[0].filename });
buf.push('<li>');
var __val__ = data.data[item][name][attribute]
buf.push(escape(null == __val__ ? "" : __val__));
__.unshift({ lineno: undefined, filename: __[0].filename });
__.shift();
buf.push('</li>');
__.shift();
__.shift();
}
__.shift();
__.shift();
buf.push('</ul>');
__.shift();
__.shift();
__.unshift({ lineno: undefined, filename: __[0].filename });
__.shift();
buf.push('</li>');
__.shift();
__.shift();
}
__.shift();
__.shift();
buf.push('</ul>');
__.shift();
__.shift();
}
 else
{
__.unshift({ lineno: 11, filename: __[0].filename });
__.unshift({ lineno: 11, filename: __[0].filename });
if ( (item === 'fish'))
{
__.unshift({ lineno: 12, filename: __[0].filename });
__.unshift({ lineno: 1, filename: "templates\snippet.jade" });
__.unshift({ lineno: 1, filename: __[0].filename });
buf.push('<p>A list of fish: ');
__.unshift({ lineno: undefined, filename: __[0].filename });
__.unshift({ lineno: 2, filename: __[0].filename });
 var fishCount = data.data.fish.length
__.shift();
__.unshift({ lineno: 3, filename: __[0].filename });
// iterate data.data.fish
(function(){
  if ('number' == typeof data.data.fish.length) {
    for (var count = 0, $$l = data.data.fish.length; count < $$l; count++) {
      var fish = data.data.fish[count];

__.unshift({ lineno: 3, filename: __[0].filename });
__.unshift({ lineno: 4, filename: __[0].filename });
var __val__ = fish
buf.push(escape(null == __val__ ? "" : __val__));
__.shift();
__.unshift({ lineno: 5, filename: __[0].filename });
 if (count !== (fishCount -1))
{
__.unshift({ lineno: 6, filename: __[0].filename });
__.unshift({ lineno: 6, filename: __[0].filename });
buf.push(', \n');
__.shift();
__.shift();
}
__.shift();
__.shift();
    }
  } else {
    for (var count in data.data.fish) {
      var fish = data.data.fish[count];

__.unshift({ lineno: 3, filename: __[0].filename });
__.unshift({ lineno: 4, filename: __[0].filename });
var __val__ = fish
buf.push(escape(null == __val__ ? "" : __val__));
__.shift();
__.unshift({ lineno: 5, filename: __[0].filename });
 if (count !== (fishCount -1))
{
__.unshift({ lineno: 6, filename: __[0].filename });
__.unshift({ lineno: 6, filename: __[0].filename });
buf.push(', \n');
__.shift();
__.shift();
}
__.shift();
__.shift();
   }
  }
}).call(this);

__.shift();
__.unshift({ lineno: 7, filename: __[0].filename });
buf.push('.\n');
__.shift();
__.shift();
buf.push('</p>');
__.shift();
__.shift();
__.shift();
}
__.shift();
__.shift();
}
__.shift();
__.shift();
}
__.shift();
__.shift();
}
return buf.join("");
} catch (err) {
  rethrow(err, __[0].filename, __[0].lineno);
}
}