'use strict';

var users = retrieval ();
readFromUsers();
//You could shorten this a little bit by just returning false. The function is either returning
//users or the fact that they're not there. So false could have represented that just as well as
//a string that says 'none'
function retrieval() {
  var users;
  if(localStorage.getItem('users')){ // if there is a useres array in local storage
    users = JSON.parse(localStorage.getItem('users')); //retireve, parse, and pass into varriable users
    return users;
  }
  users = 'none';
  return users;
}


function readFromUsers (){
  if(users === 'none'){
    return;
  }
  for(var i = 0; i < users.length; i++ ){ //for ever user in the useres array
    for(var k = 0; k < users[i].postedLyricLib.length ; k++){//for every song they wish to display
      var genre = users[i].postedLyricLib[k].genre;
      var title = users[i].postedLyricLib[k].songTitle;
      var author = users[i].name;
      var lyrics = users[i].postedLyricLib[k].lyricLib;
      //assemble lyrics:
      for(var j = 0 ; j < users[i].postedLyricLib[k].input.length; j++ ){ //for every word in the input array, we need to find a home
        for( var b = 0; b < users[i].postedLyricLib[k].lyricLib.length; b++){
          if ( users[i].postedLyricLib[k].lyricLib[b] === '*reaplceme*'){ //check every index in lyric lib to identify placeholders
            users[i].postedLyricLib[k].lyricLib[b] = users[i].postedLyricLib[k].input[j]; //if its a word the needs eplacing, replace it with the word in corresponding input array index
            break;
          }//end if
        }; //end for loop looking through each value of lyricLib array for a home for current value of index in input array
      } // end of for loop goint over each value in the input array;
    };



    //render and display lyrics
    var htmlBefore = document.getElementById('mainHall').innerHTML;
    var htmlAfter = htmlBefore + '<div class="HoF" > \n<h1 class="' + genre + '" >' + title + '</h1>\n<h3 class="' + genre + '">' + author + '</h3>\n<p class="' + genre + '">' + lyrics + '</p>';
    document.getElementById('mainHall').innerHTML = htmlAfter;

  }
}
