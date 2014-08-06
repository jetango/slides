// Require Node modules in the browser thanks to Browserify: http://browserify.org

var bespoke = require('bespoke'),
  cube = require('bespoke-theme-cube'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress'),
  state = require('bespoke-state'),
  forms = require('bespoke-forms');


// Bespoke.js
bespoke.from('article', [
  cube(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  scale(),
  hash(),
  progress(),
  state(),
  forms()
]);

var sections = document.getElementsByTagName('body')[0]
  .getElementsByTagName('section');
for (var i = 0; i < sections.length; i++) {
  var div = document.createElement('div');
  div.className = 'background';
  sections[i].appendChild(div);
};

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');
