'use strict';
/*dummy vars and tokens*/
localStorage.setItem('genreChoice', 'pop');
// --------------------------------------------------
//global varriables

var users = [];
var inputCounter = 0;
var genres = ['rock', 'pop', 'randb', 'country']; //repeat from page one script
var wordType; // pulled from from .needed array
var finished = false;
var currentUser;

//capture different areas of the HTML
var splat = document.getElementById('splatter');
var userInfo = document.getElementById('player_info');
var gameForm = document.getElementById('game_input');
var lyricDisplayArea = document.getElementById('lyrics_load');

//template constructor
function Template ( title, template, needed, input, lyricLib){
  this.songTitle = title; //song title *string*
  this.template = template; // string of lyrics with omitted words *string*
  this.needed = needed; // list of omitted words (as parts of speech) in order of appearance in this.template *array*
  this.input = input; // user input by word *array*
  this.lyricLib = lyricLib; // array of user input words, order and length will correspond to this.needed array*array*
}
Template.prototype.insert = function () {
  for(var j = 0 ; j < this.input.length; j++ ){ //for every word in the input array, we need to find a home
    for( var i = 0; i < this.lyricLib.length; i++){
      if ( this.lyricLib[i] === '*reaplceme*'){ //check every index in lyric lib to identify placeholders
        this.lyricLib[i] = this.input[j]; //if its a word the needs eplacing, replace it with the word in corresponding input array index
        break;
      }//end if
    }; //end for loop looking through each value of lyricLib array for a home for current value of index in input array
  } // end of for loop goint over each value in the input array;
};


var popTemplate1 = new Template (/*title*/'Like a Virgin' , /*template*/ '[Verse 1] \n I made it through the wilderness \n Somehow I made it through \n Didn\'t know how lost I was until I found you \n I was beat, incomplete, I\'d been had \n I was' + '***Adjective***' + ' and ' + '***Color***' + ', but you made me feel \n Yeah, you made me feel shiny and new \n [Chorus 1] \n  \n Like a ' + '***Noun***' + ' \n Touched for the very first time \n Like a ' + '***Noun***' + ' \n When your heart beats next to mine \n [Verse 2] \n Gonna ' + '***Verb***' + '  you all my love, boy \n My fear is fading fast \n Been saving it all for you, cause only ' + '***Noun***' + ' can last \n You\'re so fine and you\'re mine \n Make me ' + '***Adjective***' + ', yeah, you make me bold \n Oh, your love  thawed out \n Yeah, your ' + '***Noun***' + ' thawed out what was scared and cold \n \n [Chorus 2] \n Like a ' + '***Noun***' + ' (hey) \n Touched for the very first time \n Like a ' + '***Noun***' + ' \n With your heart next to mine \n \n [Verse 3] \n You\'re so fine and you\'re mine \n I\'ll be yours \'til the end of ' + '***Noun***' + ' \n \'Cause you made me ' + '***Verb***' + ' \n Yeah, you made me ' + '***Verb***' + ' I\'ve nothing to hide \n \n [Chorus 2] \n Like a ' + '***Noun***' + ' (hey) \n touched for the very first time \n Like a ' + '***Noun***' + ' \n With your ' + '***Body-Part***' + ' beat next to mine \n \n [Outro] \n Like a ' + '***Noun***' + ' \n Like a ' + '***Noun***' + ' \n Feels so good inside \n When you hold me, and your ' + '***Body-Part***' + ' beats, and you Noun me \n Ooh, ' + '***Noun***' + ' yeah \n Can\'t you hear my ' + '***Body-Part***' + ' beat for the very first time ', //newline for readability
 //needed
[' Adjective', 'Color ', 'Noun', 'Noun', 'Verb', 'Noun', 'Adjective', 'Noun', 'Noun', 'Noun', 'Noun', 'Verb', 'Verb', 'Noun', 'noun', 'Body-Part', 'Noun', 'Noun', 'Body-Part', 'Noun', 'Body-Part'],
 /*input array to hold user input*/
 [],
/* template plus input*/
['[Verse 1] \n I made it through the wilderness \n Somehow I made it through \n Didn\'t know how lost I was until I found you \n I was beat, incomplete, I\'d been had \n I was' , '*reaplceme*' , ' and ' , '*reaplceme*' , ', but you made me feel \n Yeah, you made me feel shiny and new \n [Chorus 1] \n  \n Like a ' , '*reaplceme*' , ' \n Touched for the very first time \n Like a ' , '*reaplceme*' , ' \n When your heart beats next to mine \n [Verse 2] \n Gonna ' , '*reaplceme*' , '  you all my love, boy \n My fear is fading fast \n Been saving it all for you, cause only ' , '*reaplceme*' , ' can last \n You\'re so fine and you\'re mine \n Make me ' , '*reaplceme*', ', yeah, you make me bold \n Oh, your love  thawed out \n Yeah, your ' , '*reaplceme*', ' thawed out what was scared and cold \n \n [Chorus 2] \n Like a ' , '*reaplceme*' , ' (hey) \n Touched for the very first time \n Like a ' , '*reaplceme*' , ' \n With your heart next to mine \n \n [Verse 3] \n You\'re so fine and you\'re mine \n I\'ll be yours \'til the end of ' , '*reaplceme*' , ' \n \'Cause you made me ' , '*reaplceme*' , ' \n Yeah, you made me ' , '*reaplceme*' , ' I\'ve nothing to hide \n \n [Chorus 2] \n Like a ' , '*reaplceme*' , ' (hey) \n touched for the very first time \n Like a ' , '*reaplceme*' , ' \n With your ' , '*reaplceme*' , ' beat next to mine \n \n [Outro] \n Like a ' , '*reaplceme*' , ' \n Like a ' , '*reaplceme*' , ' \n Feels so good inside \n When you hold me, and your ' , '*reaplceme*' , ' beats, and you Noun me \n Ooh, ' , '*reaplceme*' , ' yeah \n Can\'t you hear my ' , '*reaplceme*' , ' beat for the very first time ']);
//21

var rockTemplate1 = new Template ( 'Welcome to the Jungle',' ', [' ', ' '], [' ',' '], ' ');

var rNbTemplate1 = new Template ( 'Jin N Juic', ' ', [' ', ' '], [' ',' '], ' ');

var countryTemplate1 = new Template ( 'Walking After Midnight ', ' ', [' ', ' '], [' ',' '], ' ');

var rockSongs = [rockTemplate1];
var countrySongs = [countryTemplate1];
var popSongs = [popTemplate1];
var rNbSongs = [rNbTemplate1];
var allSongs = [rockSongs, countrySongs, popSongs, rNbSongs];

//set page style
var retrieve = localStorage.getItem('genreChoice'); //retrieve template selection token from local storage
var genreChoice = retrieve; //get from stroage parse and record into genreChoice ie. country, rock, pop, rnb
userInfo.className = genreChoice;
gameForm.className = genreChoice;
lyricDisplayArea.className = genreChoice;
 //set template
var sessionTemplate; // which song are we using this session

function setSessionTemplate (){ // pick a "random" song from the songs in the genre the user picked
  var rand = 0;
  var templateChoice;
  function genrand (min, max){
    min = min;
    max = max;
    rand = Math.floor(Math.random() * (max - min)) + min;
    return rand;
  }

  if (genreChoice === genres[0] ) {
      //rock
      // templateChoice = rockTemplate1 //the code below should do this ( given that rockTemplate1 is the only element in rockSongs)
    console.log('true if equal: ' + genreChoice + ' , ' + genres[0]);
    rand = genrand(rockSongs.length, 0);
    templateChoice = rockSongs[rand];

  }
  else if (genreChoice === genres[1]){
      //pop
      // templateChoice = popTemplate1 //the code below should do this ( given that popTemplate1 is the only element in popSongs)
    console.log('true if equal: ' + genreChoice + ' , ' + genres[1]);
    rand = genrand(popSongs.length , 0);
    templateChoice = popSongs[rand];
  }
  else if (genreChoice === genres[2]){
      //rNb
      // templateChoice = rNbTemplate1 //the code below should do this ( given that rNbTemplate1 is the only element in rNbSongs)
    console.log('true if equal: ' + genreChoice + ' , ' + genres[2]);
    rand = genrand( rNbSongs.length, 0);
    templateChoice = rNbSongs[rand];
  }
  else if (genreChoice === genres[3]){
      //country
      // templateChoice = countryTemplate1 //the code below should do this ( given that countryTemplate1 is the only element in countrySongs)
    console.log('true if equal: ' + genreChoice + ' , ' + genres[2]);
    rand = genrand( countrySongs.length, 0);
    templateChoice = countrySongs[rand];
  }
  else{
    alert('something went wrong!');
    console.log( genreChoice + genres + allSongs);
  }
  return templateChoice;
}
sessionTemplate = setSessionTemplate (); //set song sellection to output of setSessionTemplate


// --------------------------------------------------------------
//above this line the functionallity works to check for and set appropriate template and style


var newUserButton = document.getElementById('new_user');
newUserButton.addEventListener('click', clickHandler );

//user object constructor
function User ( name, email) {
  this.name = name;
  this.email = email;
  this.noPosted = 0; //number of lyricLibs this uses has posted
  this.postedLyricLib = [ ]; // collection of LyricLibs this user wants posted.
  this.sessionCash = [ ]; // a place for the template object that the user is working on each session
}
//handler to instanciate new user
function clickHandler (event) {
  event.preventDefault();
  var userName = document.getElementById('name').value;
  var userEmail = document.getElementById('email').value;
  var thisUser = new User(userName, userEmail);
  userInfo.style.visibility = 'hidden'; //hide this user info form
  gameForm.style.visibility = 'visible'; // reveal the game input form

  //save the user
  var savedUser = JSON.stringify(thisUser);
  localStorage.setItem(thisUser.name, savedUser);


  wordType = sessionTemplate.needed[0];   // set first word type
  splat.textContent = wordType;

  currentUser = thisUser;
}

//set event listener for game input form
var getInput = document.getElementById('getterButton');
getInput.addEventListener('click', handleGetter );

//handler is a "getter" it gets and stores the user input
function handleGetter (event){ //
  event.preventDefault();

  var thisSong = sessionTemplate; //object model for the patricular set of song lyrics being used for this game session (sessionSong is a global)
  var neededWords = thisSong.needed;
  var newWords = thisSong.input; //an array to capture the user input
  var lib; // to hold individual strings to be appeneded to new words array


  if(inputCounter < neededWords.length){ // if we are in need of words
    inputCounter++; //user just clicked input, itterate the counter

    var getterField = document.getElementById('getterField');
    lib = getterField.value; // pass the value of user input in getterField into lib

    newWords.push(lib); // add lib to array of input words
    getterField.value = '';
    lib = ' '; //clear lib
    wordType = sessionTemplate.needed[inputCounter];   // set next word type
    splat.textContent = wordType; //display next required part of speech
    sessionTemplate = thisSong; //pass updated data back into session tamplate
  }
  else if(inputCounter === neededWords.length) {
    //DONE
    console.log( 'user nput: ' + newWords);

    thisSong.insert();

    console.log('\n\n\nat this point, ' + thisSong.input + ' should be equal to: ' + newWords);//double check
    console.log('\n\n\n this should be the NEW lyrics: \n\n' + thisSong.lyricLib); //

    currentUser.sessionCash = thisSong; // add the finished lyricLib to to the authoring useres cash property
    users.push(currentUser); // add the current user into the users array
    var lsUsers = JSON.stringify(users); //stringify
    localStorage.setItem( 'users', lsUsers); //the user object and all associated data is sent to local storage

    lyricDisplayArea.style.visibility = 'visible'; //reveal final display lyricsLib section
    game_input.style.visibility = 'hidden'; //hide game input form;
    inputCounter = 0; // reset counter
    render(thisSong); //populate final display lyricsLib area

  }

  if(inputCounter === (neededWords.length - 1)){ //next click will be the last
    getInput.textContent = 'OK'; //change button from saying NEXT to OK
  }

}//close handler

function render (templateObject){
  var rendtitle = templateObject.songTitle; //title of template object song
  var rendlyriclib = templateObject.lyricLib; // actual lyrics with user input

  var displaytitle = document.getElementById('title'); //point to HTML location for title
  var displayLyrics = document.getElementById('finishedLib'); //point to HTML location of lyricLib

  displaytitle.textContent = rendtitle; //pipe in text to HTML
  displayLyrics.textContent = rendlyriclib;
}

var hOfButton = document.getElementById('hOf');
hOfButton.addEventListener('click', hOfHandler);

function hOfHandler (event){ //"post" this sessions lyricLib on the Hall of Fame
  var moveToHoF = thisUser.sessionCash[0];
  thisUser.postedLyricLib.push(moveToHoF);
  localStorage.setItem(users, JSON.stringify(thisUser));//restrigify and save new values for thisUser over previous entry in LocalStorage
}
