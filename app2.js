'use strict';

/*We need a function that grabs the title of the song determined by user choice and fills it into the h1 with id of lyrics_title and also grabs and fills in the paragraph with the id lyrics_p*/
var lyricLib = [];

function userInfo (userName, userEmail) { //wrap this in a for loop?
  this.name = userName;
  this.email = userEmail;
  this.lyricLib = lyricLib;
}

var userInfoSubmit = document.getElementById('info_submit');
var storedInfo = localStorage.getItem('userInfo'); //this may have to be the same as getItem lyricLib

//we need an if/else statement that parses stored userInfo

var hallOfFameSubmit = document.getElementById('HoF');
var storedSubmits = localStorage.getItem('lyricLib'); //maybe should change this to userInfo

if (storedSubmits) {
  lyricLib = JSON.parse(storedSubmits);
} else {
  for(var i = 0; i < paths.length; i++){
    var newLyricLib = new userInfo(lyricLib[i]); //creates a new userInfo instance and attaches it to our object
    lyricLib.push(newLyricLib); //pushes to an array of all of our items
  }
}


hallOfFameSubmit.addEventListener('click', clickHandler2);

function clickHandler2(event) {
  event.preventDefault();

function saveData() {
  var itemsJSON = JSON.stringify(lyricLib);
  localStorage.setItem('lyricLib', lyricLibJSON);
};
