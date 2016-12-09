'use strict';

var rockSplash = document.getElementById('rock_piece');
var popSplash = document.getElementById('pop_piece');
var rnbSplash = document.getElementById('rnb_piece');
var countrySplash = document.getElementById('country_piece');

rockSplash.addEventListener('mouseover', function(event) {
  event.target.style.opacity = 1;
}, false);

rockSplash.addEventListener('mouseout', function(event) {
  event.target.style.opacity = 0;
}, false);

popSplash.addEventListener('mouseover', function(event) {
  event.target.style.opacity = 1;
}, false);

popSplash.addEventListener('mouseout', function(event) {
  event.target.style.opacity = 0;
}, false);

rnbSplash.addEventListener('mouseover', function(event) {
  event.target.style.opacity = 1;
}, false);

rnbSplash.addEventListener('mouseout', function(event) {
  event.target.style.opacity = 0;
}, false);

countrySplash.addEventListener('mouseover', function(event) {
  event.target.style.opacity = 1;
}, false);

countrySplash.addEventListener('mouseout', function(event) {
  event.target.style.opacity = 0;
}, false);
