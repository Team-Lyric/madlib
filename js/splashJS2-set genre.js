'use strict';


var rock = document.getElementById('rock_link');
var pop = document.getElementById('pop_link');
var rnb = document.getElementById('rnb_link');
var country = document.getElementById('country_link');

var rockSplash = document.getElementById('rock_piece');
var popSplash = document.getElementById('pop_piece');
var rnbSplash = document.getElementById('rnb_piece');
var countrySplash = document.getElementById('country_piece');

//It's possible that this may have been the only way to adjust the opacity here.
//But I'd guess that it would be easier to set it with a :hover psudeo selector
//in the CSS.
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


rock.addEventListener('click', rockHandler);
pop.addEventListener('click', popHandler);
rnb.addEventListener('click', rnbHandler);
country.addEventListener('click', countryHandler);

function countryHandler(event) {
  event.preventDefault();
  localStorage.setItem('genreChoice', 'country');
}
function rnbHandler(event){
  event.preventDefault();
  localStorage.setItem('genreChoice', 'rnb');
}
function popHandler(event){
  event.preventDefault();
  localStorage.setItem('genreChoice', 'pop');
}
function rockHandler(event){
  event.preventDefault();
  localStorage.setItem('genreChoice', 'rock');
}
