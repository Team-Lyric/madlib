'use strict';

var rock = document.getElementById("rock_piece");

rock.addEventListener("mouseover", function(event) {
  event.target.style.opacity = 1;
}, false);
