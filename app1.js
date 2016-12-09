'use strict';

var rock = document.getElementById('rock_link');
var pop = document.getElementById('pop_link');
var rnb = document.getElementById('rnb_link');
var country = document.getElementById('country_link');

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
