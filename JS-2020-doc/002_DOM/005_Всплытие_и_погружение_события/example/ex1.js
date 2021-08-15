// ext1.js
var html = document.documentElement;
var body = document.body;
var div = body.querySelector('div');
var ul = body.querySelector('ul');
var li = body.querySelector('li');
var pause = 200;
// Capture
html.addEventListener('click', callback, true);
body.addEventListener('click', callback, true);
div.addEventListener('click', callback, true);
html.addEventListener('click', callback, true);
ul.addEventListener('click', callback, true);
li.addEventListener('click', callback, true);
// Bubble
html.addEventListener('click', callback, false);
body.addEventListener('click', callback, false);
div.addEventListener('click', callback, false);
html.addEventListener('click', callback, false);
ul.addEventListener('click', callback, false);
li.addEventListener('click', callback, false);

function callback(event) {
  var ms = (event.timeout = event.timeout + pause || 0);
  var target = event.currentTarget;

  setTimeout(function() {
    target.classList.add('highlight');
    setTimeout(function() {
      target.classList.remove('highlight');
    }, pause);
  }, ms);
}
