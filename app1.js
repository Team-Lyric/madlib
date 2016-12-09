'use strict';

var rock = document.getElementById("rock_piece");
var pop = document.getElementById("pop_piece");
var rnb = document.getElementById("'rnb_piece'");
var country = document.getElementById("country_piece");

rock.addEventListener("mouseover", function(event) {
  event.target.style.opacity = 1;
}, false);

rock.addEventListener("mouseout", function(event) {
  event.target.style.opacity = 0;
}, false);

pop.addEventListener("mouseover", function(event) {
  event.target.style.opacity = 1;
}, false);

pop.addEventListener("mouseout", function(event) {
  event.target.style.opacity = 0;
}, false);

rnb.addEventListener("mouseover", function(event) {
  event.target.style.opacity = 1;
}, false);

rnb.addEventListener("mouseout", function(event) {
  event.target.style.opacity = 0;
}, false);

country.addEventListener("mouseover", function(event) {
  event.target.style.opacity = 1;
}, false);

country.addEventListener("mouseout", function(event) {
  event.target.style.opacity = 0;
}, false);
