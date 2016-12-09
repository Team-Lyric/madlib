'use strict';
//global varriables

var users = [];
var inputCounter = 0;
var genres = ['rock', 'pop', 'randb', 'country']; //repeat from page one script
var wordType; // pulled from from .needed array
var currentUser;

//capture different areas of the HTML
var splat = document.getElementById('splatter');
var userInfo = document.getElementById('player_info');
var gameForm = document.getElementById('game_input');
var lyricDisplayArea = document.getElementById('lyrics_load');

//template constructor
function Template ( title, template, needed, input, lyricLib, genre){
  this.songTitle = title; //song title *string*
  this.template = template; // string of lyrics with omitted words *string*
  this.needed = needed; // list of omitted words (as parts of speech) in order of appearance in this.template *array*
  this.input = input; // user input by word *array*
  this.lyricLib = lyricLib; // array of user input words, order and length will correspond to this.needed array*array*
  this.genre = genre;

  this.insert = function () {
    for(var j = 0 ; j < this.input.length; j++ ){ //for every word in the input array, we need to find a home
      for( var i = 0; i < this.lyricLib.length; i++){
        if ( this.lyricLib[i] === '*reaplceme*'){ //check every index in lyric lib to identify placeholders
          this.lyricLib[i] = this.input[j]; //if its a word the needs eplacing, replace it with the word in corresponding input array index
          break;
        }//end if
      }; //end for loop looking through each value of lyricLib array for a home for current value of index in input array
    } // end of for loop goint over each value in the input array;
  };

}
// Template.prototype.insert = function () {
//   for(var j = 0 ; j < this.input.length; j++ ){ //for every word in the input array, we need to find a home
//     for( var i = 0; i < this.lyricLib.length; i++){
//       if ( this.lyricLib[i] === '*reaplceme*'){ //check every index in lyric lib to identify placeholders
//         this.lyricLib[i] = this.input[j]; //if its a word the needs eplacing, replace it with the word in corresponding input array index
//         break;
//       }//end if
//     }; //end for loop looking through each value of lyricLib array for a home for current value of index in input array
//   } // end of for loop goint over each value in the input array;
// };
/****************************************************
the above was taken out in favor of adding the method
into the constructor listeral instead of the prototype
so that if these objects are placed into storage they
are retrieved with all their funtionality intact
******************************************************/

var popTemplate1 = new Template (/*title*/'Like a Virgin' , /*template*/ '[Verse 1] \n I made it through the wilderness \n Somehow I made it through \n Didn\'t know how lost I was until I found you \n I was beat, incomplete, I\'d been had \n I was' + '***Adjective***' + ' and ' + '***Color***' + ', but you made me feel \n Yeah, you made me feel shiny and new \n [Chorus 1] \n  \n Like a ' + '***Noun***' + ' \n Touched for the very first time \n Like a ' + '***Noun***' + ' \n When your heart beats next to mine \n [Verse 2] \n Gonna ' + '***Verb***' + '  you all my love, boy \n My fear is fading fast \n Been saving it all for you, cause only ' + '***Noun***' + ' can last \n You\'re so fine and you\'re mine \n Make me ' + '***Adjective***' + ', yeah, you make me bold \n Oh, your love  thawed out \n Yeah, your ' + '***Noun***' + ' thawed out what was scared and cold \n \n [Chorus 2] \n Like a ' + '***Noun***' + ' (hey) \n Touched for the very first time \n Like a ' + '***Noun***' + ' \n With your heart next to mine \n \n [Verse 3] \n You\'re so fine and you\'re mine \n I\'ll be yours \'til the end of ' + '***Noun***' + ' \n \'Cause you made me ' + '***Verb***' + ' \n Yeah, you made me ' + '***Verb***' + ' I\'ve nothing to hide \n \n [Chorus 2] \n Like a ' + '***Noun***' + ' (hey) \n touched for the very first time \n Like a ' + '***Noun***' + ' \n With your ' + '***Body-Part***' + ' beat next to mine \n \n [Outro] \n Like a ' + '***Noun***' + ' \n Like a ' + '***Noun***' + ' \n Feels so good inside \n When you hold me, and your ' + '***Body-Part***' + ' beats, and you Noun me \n Ooh, ' + '***Noun***' + ' yeah \n Can\'t you hear my ' + '***Body-Part***' + ' beat for the very first time ', //newline for readability
 //needed
[' Adjective', 'Color ', 'Noun', 'Noun', 'Verb', 'Noun', 'Adjective', 'Noun', 'Noun', 'Noun', 'Noun', 'Verb', 'Verb', 'Noun', 'noun', 'Body-Part', 'Noun', 'Noun', 'Body-Part', 'Noun', 'Body-Part'],
 /*input array to hold user input*/
 [],
/* template plus input*/
['[Verse 1] \n I made it through the wilderness \n Somehow I made it through \n Didn\'t know how lost I was until I found you \n I was beat, incomplete, I\'d been had \n I was' , '*reaplceme*' , ' and ' , '*reaplceme*' , ', but you made me feel \n Yeah, you made me feel shiny and new \n [Chorus 1] \n  \n Like a ' , '*reaplceme*' , ' \n Touched for the very first time \n Like a ' , '*reaplceme*' , ' \n When your heart beats next to mine \n [Verse 2] \n Gonna ' , '*reaplceme*' , '  you all my love, boy \n My fear is fading fast \n Been saving it all for you, cause only ' , '*reaplceme*' , ' can last \n You\'re so fine and you\'re mine \n Make me ' , '*reaplceme*', ', yeah, you make me bold \n Oh, your love  thawed out \n Yeah, your ' , '*reaplceme*', ' thawed out what was scared and cold \n \n [Chorus 2] \n Like a ' , '*reaplceme*' , ' (hey) \n Touched for the very first time \n Like a ' , '*reaplceme*' , ' \n With your heart next to mine \n \n [Verse 3] \n You\'re so fine and you\'re mine \n I\'ll be yours \'til the end of ' , '*reaplceme*' , ' \n \'Cause you made me ' , '*reaplceme*' , ' \n Yeah, you made me ' , '*reaplceme*' , ' I\'ve nothing to hide \n \n [Chorus 2] \n Like a ' , '*reaplceme*' , ' (hey) \n touched for the very first time \n Like a ' , '*reaplceme*' , ' \n With your ' , '*reaplceme*' , ' beat next to mine \n \n [Outro] \n Like a ' , '*reaplceme*' , ' \n Like a ' , '*reaplceme*' , ' \n Feels so good inside \n When you hold me, and your ' , '*reaplceme*' , ' beats, and you Noun me \n Ooh, ' , '*reaplceme*' , ' yeah \n Can\'t you hear my ' , '*reaplceme*' , ' beat for the very first time '],
/*song genre*/'pop');



var rockTemplate1 = new Template (/*title*/'Welcome to the Jungle',/*template*/'Welcome to the ' + '***Natural Place***' + ' we got fun and games \n We got everything you want' + '***Sweet Substance***' + ', we know the names \n We are the ' + '***Plural Noun***' + ' that can ' + '***Verb***' + ' whatever you may need \n If you got the ' + '***Noun***' + ' honey we got your ' + '***Disease***' + '\n In the ' + '***Natural Place***' + ', welcome to the ' + '***Natural Place***' + '\n Watch it bring you to your sha na na na na ' + '***Body-Part (Plural)***' + '\n I wanna watch you bleed \n \n Welcome to the ' + '***Natural Place#***' + ' we take it day by day \n If you want it you\'re gonna bleed but it\'s the price you pay \n And you\'re a very ' + '***Adjective***' + ' ' + '***Noun***' + ' very ' + '***Adjective***' + ' to please \n You can taste the ' + '***Adjective***' + ' ' + '***Plural Noun***' + ' but you won\'t get there for free \n In the jungle welcome to the ' + '***Natural Place***' + '\n Feel my, my, my, my serpentine \n I,I wanna hear you ' + '***Verb***' + '\n \n Welcome to the ' + '***Natural Place***' + ' it gets worse here everyday \n You learn to live like an ' + '***Noun***' + ' in the ' + '***Natural Place***' + ' where we ' + '***Verb***' + '\n If you got a hunger for what you see you\'ll ' + '***Verb***' + ' it eventually \n You can have everything you want but you better not take it from me \n In the ' + '***Natural Place***' + ', welcome to the ' + '***Natural Place***' + '\n Watch it bring you to your sha na na na na ' + '***Body Part (Plural)***' + '\n I\'m gonna watch you bleed \n \n And when you\'re high you never ever want to come down \n So down, so down, so down, yeah \n',
['Natural Place', 'Sweet Substance', 'Plural Noun', 'Verb', 'Noun', 'Disease', 'Natural Place', 'Natural Place', 'Body-Part (Plural)', 'Natural Place', 'Adjective', 'Noun', 'Adjective', 'Adjective', 'Plural Noun', 'Natural Place', 'Verb', 'Natural Place', 'Noun', 'Natural Place', 'Verb', 'Verb', 'Natural Place', 'Natural Place', 'Body-Part (Plural)'],
[],
['Welcome to the ', '*reaplceme*', ' we got fun and games \n We got everything you want', '*reaplceme*', ', we know the names \n We are the ', '*reaplceme*', ' that can ', '*reaplceme*', ' whatever you may need \n If you got the ', '*reaplceme*', ' honey we got your ', '*reaplceme*', '\n In the ', '*reaplceme*', ', welcome to the ', '*reaplceme*', '\n Watch it bring you to your sha na na na na ', '*reaplceme*', '\n I wanna watch you bleed \n \n Welcome to the ', '*reaplceme*', ' we take it day by day \n If you want it you\'re gonna bleed but it\'s the price you pay \n And you\'re a very ', '*reaplceme*', '*reaplceme*', ' very ', '*reaplceme*', ' to please \n You can taste the ', '*reaplceme*', '*reaplceme*', 'but you won\'t get there for free \n In the jungle welcome to the ', '*reaplceme*', '\n Feel my, my, my, my serpentine \n I,I wanna hear you ', '*reaplceme*', '\n \n Welcome to the ', '*reaplceme*', ' it gets worse here everyday \n You learn to live like an ', '*reaplceme*', 'in the ', '*reaplceme*', ' where we', '*reaplceme*', '\n If you got a hunger for what you see you\'ll', '*reaplceme*', 'it eventually \n You can have everything you want but you better not take it from me \n In the ', '*reaplceme*', ', welcome to the ', '*reaplceme*', '\n Watch it bring you to your sha na na na na ', '*reaplceme*', '\n I\'m gonna watch you bleed \n \n And when you\'re high you never ever want to come down \n So down, so down, so down, yeah \n'],
 'rock');

 var rNbTemplate1 = new Template (/*title*/'Gin \'n\' Juice',/*template*/'With so much drama in the L-B-C \n It\'s kinda ' + '***Noun***' + ' bein Snoop D-O-double-G \n But I, somehow, some way \n Keep comin up with ' + '***Adjective***' + ' ass ' + '***Synonym for Excrement***' + ' like every single day \n May I, kick a little something for the G\'s (yeah) \n and, make a few ends as (yeah!) I breeze, through \n Two in the mornin and the party\'s still ' + '***Verb Ending in –ing***' + '\n cause my momma ain\'t home \n I got ' + '***Female Animal (plural)***' + ' in the living room gettin it on \n and, they ain\'t leavin til six in the mornin (six in the morning) \n So what you wanna do, sheeeit \n I got a pocket full of ' + '***Plural Noun***' + 'and my homeboys do too \n So turn off the lights and close the doors \n But (but what) we don\'t love them ' + '***Gardening Tool (plural)***' + ', yeah! \n So G\'s up, ' + '***Gardening Tool (plural)***' + ' down, while you motherfuckers bounce to this \n' + '***Verb Ending in -ing***' + ' down the street, smokin indo, ' + '***Synonym for Drinking***' + ' on ' + '***Liquid***' + ' and juice \n Laid back [with my mind on my ' + '***Noun***' + ' and my ' + '***Same Noun As Before***' + ' on my mind] \n Now, that, I got me some Seagram\'s ' + '***Liquid***' + '\n Everybody got they cups but they ain\'t chipped in \n Now this types of ' + '***Synonym for Excrement***' + ', happens all the time \n You got to get yours ' + '***Derogatory Name***' + ' but I gotta get mine \n Everything is fine when you ' + '***Verb Ending in -ing***' + ' to the D-O-G \n I got the cultivating music that be captivating he \n who listens, to the words that I speak \n As I take me a drink to the middle of the street \n and get to mackin to this ' + '***Female Animal***' + ' named Sadie (Sadie?) \n She used to be the homeboy\'s lady (Oh, that ' + '***Female Animal***' + ') \n Eighty degrees, when I tell that bitch please \n Raise up off these N-U-T\'s, cause you gets none of these \n At ease, as I mob with the Dogg Pound, feel the breeze \n beeeeeitch, I\'m just< \n Rollin down the street, smokin indo, sippin on gin and juice \n Laid back [with my mind on my money and my money on my mind] \n Rollin down the street, smokin indo, sippin on gin and juice \n Laid back [with my mind on my money and my money on my mind] \n Later on that day \n My homey Dr. Dre came through with a gang of Tanqueray \n And a fat ass J, of some ' + '***Adjective***' + ' chronic that made me choke \n' + '***Synonym for Excrement***' + ' this ain\'t no joke \n I had to back up off of it and sit my cup down \n Tanqueray and chronic, yeah I\'m fucked up now \n But it ain\'t no stoppin, I\'m still poppin \n Dre got some ' + '***Female Animal (plural)***' + ' from the city of Compton \n To serve me, not with a cherry on top \n Cause when I bust my ' + '***Organ***' + ', I\'m raisin up off the cot \n Don\'t get upset girl, that\'s just how it goes \n I don\'t love you ' + '***Gardening Tool (plural)***' + ', I\'m out the do\' \n And I\'ll be \n Rollin down the street, smokin indo, sippin on ' + '***Liquid***' + ' and juice \n \n Laid back [with my mind on my money and my money on my mind] \n Rollin down the street, smokin indo, sippin on ' + '***Liquid***' + ' and juice \n Laid back [with my mind on my money and my money on my mind] \n \n',
['Noun', 'Adjective', 'Synonym for Excrement', 'Verb Ending in -ing', 'Female Animal (plural)', 'Plural Noun', 'Gardening Tool (plural)', 'Gardening Tool (plural)',
'Verb Ending in -ing', 'Synonym for Drinking', 'Liquid', 'Noun', 'Same Noun As Previous', 'Liquid', 'Synonym for Exrement', 'Derogatory Name', 'Verb Ending in -ing',
'Female Animal', 'Female Animal', 'Adjective', 'Synonym for Exrement', 'Female Animal (plural)', 'Organ', 'Gardening Tool (plural)', 'Liquid', 'Liquid'],
[],
['With so much drama in the L-B-C \n It\'s kinda ' , '*reaplceme*', ' bein Snoop D-O-double-G \n But I, somehow, some way \n Keep comin up with ', '*reaplceme*', ' ass ', '*reaplceme*', ' like every single day \n May I, kick a little something for the G\'s (yeah) \n and, make a few ends as (yeah!) I breeze, through \n Two in the mornin and the party\'s still ', '*reaplceme*', '\n cause my momma ain\'t home \n I got ', '*reaplceme*', ' in the living room gettin it on \n and, they ain\'t leavin til six in the mornin (six in the morning) \n So what you wanna do, sheeeit \n I got a pocket full of ', '*reaplceme*', 'and my homeboys do too \n So turn off the lights and close the doors \n But (but what) we don\'t love them ', '*reaplceme*', ', yeah! \n So G\'s up, ', '*reaplceme*', ' down, while you motherfuckers bounce to this \n' , '*reaplceme*', ' down the street, smokin indo, ', '*reaplceme*', ' on ', '*reaplceme*', ' and juice \n Laid back [with my mind on my ', '*reaplceme*', ' and my ', '*reaplceme*', ' on my mind] \n Now, that, I got me some Seagram\'s ', '*reaplceme*', '\n Everybody got they cups but they ain\'t chipped in \n Now this types of ', '*reaplceme*', ', happens all the time \n You got to get yours ', '*reaplceme*', ' but I gotta get mine \n Everything is fine when you ', '*reaplceme*', ' to the D-O-G \n I got the cultivating music that be captivating he \n who listens, to the words that I speak \n As I take me a drink to the middle of the street \n and get to mackin to this ', '*reaplceme*', ' named Sadie (Sadie?) \n She used to be the homeboy\'s lady (Oh, that ', '*reaplceme*', ') \n Eighty degrees, when I tell that bitch please \n Raise up off these N-U-T\'s, cause you gets none of these \n At ease, as I mob with the Dogg Pound, feel the breeze \n beeeeeitch, I\'m just< \n Rollin down the street, smokin indo, sippin on gin and juice \n Laid back [with my mind on my money and my money on my mind] \n Rollin down the street, smokin indo, sippin on gin and juice \n Laid back [with my mind on my money and my money on my mind] \n Later on that day \n My homey Dr. Dre came through with a gang of Tanqueray \n And a fat ass J, of some ', '*reaplceme*', ' chronic that made me choke \n', '*reaplceme*', ' this ain\'t no joke \n I had to back up off of it and sit my cup down \n Tanqueray and chronic, yeah I\'m fucked up now \n But it ain\'t no stoppin, I\'m still poppin \n Dre got some ', '*reaplceme*', ' from the city of Compton \n To serve me, not with a cherry on top \n Cause when I bust my ', '*reaplceme*', ', I\'m raisin up off the cot \n Don\'t get upset girl, that\'s just how it goes \n I don\'t love you ', '*reaplceme*', ', I\'m out the do\' \n And I\'ll be \n Rollin down the street, smokin indo, sippin on ', '*reaplceme*', ' and juice \n \n Laid back [with my mind on my money and my money on my mind] \n Rollin down the street, smokin indo, sippin on ', '*reaplceme*', ' and juice \n Laid back [with my mind on my money and my money on my mind] \n \n'],
 'rnb');
var countryTemplate1 = new Template (/*title*/'Walkin\' After Midnight',/*template*/'I go out ' + '***Verb Ending in –ing***' + ' after midnight \n Out in the moonlight  \n Just like we used to do \n I\'m always ' + '***Verb Ending in –ing***' + '  after midnight ' + '***Verb Ending in –ing***' + ' for you \n I ' + '***Verb***' + ' for miles along the highway \n Well, that\'s just my way \n Of sayin\' I love you \n I\'m always ' + '***Verb Ending in –ing***' + ' after midnight, ' + '***Verb Ending in –ing***' + ' for you \n I stop to see a ' + '***Verb Ending in –ing***' + ' ' + '***Plant Species***' + ' ' + '***Verb Ending in –ing***' + ' on his pillow \n Maybe he\'s ' + '***Verb Ending in –ing***' + ' for me \n And as the ' + '***Plural Noun***' + ' turn gloomy \n Night winds ' + '***Verb***' + ' to me \n I\'m ' + '***Adjective***' + ' as I can be \n I go out ' + '***Verb Ending in –ing***' + ' after midnight \n Out in the starlight \n Just hopin\' you may be \n Somewhere a-' + '***Verb Ending in –ing***' + ' after midnight, ' + '***Verb Ending in –ing***' + ' for me \n I stop to see a ' + '***Verb Ending in –ing***' + ' ' + '***Plant Species***' + ' ' + '***Verb Ending in –ing***' + ' on his pillow \n Maybe he\'s ' + '***Verb Ending in –ing***' + ' for me \n And as the ' + '***Plural Noun***' + ' turn gloomy \n Night winds ' + '***Verb***' + ' to me \n I\'m ' + '***Adjective***' + ' as I can be \n I go out ' + '*** Verb Ending in –ing***' + ' after midnight \n Out in the starlight \n Just hopin\' you may be \n Somewhere a-' + '*** Verb Ending in –ing***' + ' after midnight, ' + '*** Verb Ending in –ing***' + ' for me \n',
 ['Verb Ending in –ing', 'Verb Ending in –ing', 'Verb Ending in –ing', 'Verb', 'Verb Ending in –ing', 'Verb Ending in –ing', 'Verb Ending in –ing', 'Plant Species', 'Verb Ending in –ing', 'Verb Ending in –ing', 'Plural Noun', 'Verb', 'Adjective', 'Verb Ending in –ing', 'Verb Ending in –ing', 'Verb Ending in –ing', 'Verb Ending in –ing', 'Plant Species', 'Verb Ending in –ing', 'Verb Ending in –ing', 'Plural Noun', 'Verb', 'Adjective', 'Verb Ending in –ing', 'Verb Ending in –ing', 'Verb Ending in –ing'],
 [],
 ['I go out ', '*reaplceme*', ' after midnight \n Out in the moonlight  \n Just like we used to do \n I\'m always ', '*reaplceme*', 'after midnight ', '*reaplceme*', ' for you \n I ', '*reaplceme*', ' for miles along the highway \n Well, that\'s just my way \n Of sayin\' I love you \n I\'m always ', '*reaplceme*', ' after midnight, ', '*reaplceme*', ' for you \n I stop to see a ', '*reaplceme*', ' ', '*reaplceme*', ' ', '*reaplceme*', ' on his pillow \n Maybe he\'s ', '*reaplceme*', ' for me \n And as the ', '*reaplceme*', 'turn gloomy \n Night winds ', '*reaplceme*', ' to me \n I\'m ', '*reaplceme*', ' as I can be \n I go out ', '*reaplceme*', ' after midnight \n Out in the starlight \n Just hopin\' you may be \n Somewhere a-', '*reaplceme*', 'after midnight, ', '*reaplceme*', ' for me \n I stop to see a ', '*reaplceme*', ' ' , '*reaplceme*', ' ', '*reaplceme*', ' on his pillow \n Maybe he\'s ', '*reaplceme*', ' for me \n And as the ', '*reaplceme*', ' turn gloomy \n Night winds ', '*reaplceme*', ' to me \n I\'m ', '*reaplceme*', 'as I can be \n I go out ', '*reaplceme*', ' after midnight \n Out in the starlight \n Just hopin\' you may be \n Somewhere a-', '*reaplceme*', ' after midnight, ', '*reaplceme*', ' for me \n'],
 'country');

var rockSongs = ['rock', rockTemplate1];
var countrySongs = ['country', countryTemplate1];
var popSongs = ['pop', popTemplate1];
var rNbSongs = ['rnb', rNbTemplate1];
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
  function genrand (max, min){
    min = min;
    max = max;
    rand = Math.floor(Math.random() * (max - min)) + min;
    return rand;
  }

  if (genreChoice === genres[0] ) {
      //rock
      // templateChoice = rockTemplate1 //the code below should do this ( given that rockTemplate1 is the only element in rockSongs)
    console.log('true if equal: ' + genreChoice + ' , ' + genres[0]);
    rand = genrand(rockSongs.length, 1);
    templateChoice = rockSongs[rand];

  }
  else if (genreChoice === genres[1]){
      //pop
      // templateChoice = popTemplate1 //the code below should do this ( given that popTemplate1 is the only element in popSongs)
    console.log('true if equal: ' + genreChoice + ' , ' + genres[1]);
    rand = genrand(popSongs.length , 1);
    templateChoice = popSongs[rand];
  }
  else if (genreChoice === genres[2]){
      //rNb
      // templateChoice = rNbTemplate1 //the code below should do this ( given that rNbTemplate1 is the only element in rNbSongs)
    console.log('true if equal: ' + genreChoice + ' , ' + genres[2]);
    rand = genrand( rNbSongs.length, 1);
    templateChoice = rNbSongs[rand];
  }
  else if (genreChoice === genres[3]){
      //country
      // templateChoice = countryTemplate1 //the code below should do this ( given that countryTemplate1 is the only element in countrySongs)
    console.log('true if equal: ' + genreChoice + ' , ' + genres[2]);
    rand = genrand( countrySongs.length, 1);
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

    currentUser.sessionCash.push(thisSong); // add the finished lyricLib to to the authoring useres cash property
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
  event.preventDefault();
  currentUser.noPosted++; //iterate counter to keep track of how many the user wishes to display in the Hall of Fame
  var moveToHoF = currentUser.sessionCash[0];//move from session cash into a var for moving
  currentUser.postedLyricLib.push(moveToHoF);//move to a more "permanent" storage location for libs that display to the HoF
  currentUser.sessionCash = []; //clear session cash
  for(var k = 0; k < users.lenth; k++){
    if (currentUser.name === users[k].name){ //find index for current user in users array
      users[k] = currentUser; //overwrite old user data with new currentUser was instanciated empty and has been gaining data throughotu the game process. The last, and only time the currentUser was saved to local storage was right after it was created, so we need to save the state of currentUser and its contents at the end over the state of currentUser at declaration.
    }//end of if statement
  }//end of for loop

  var lsUsers = JSON.stringify(users);
  localStorage.setItem('users', lsUsers);//restrigify and save new values for thisUser over previous entry in LocalStorage

  alert('Entering the HALL OF FAME');
  window.location = 'HOFFINAL.html'; //send them to the hall of fame!
}
