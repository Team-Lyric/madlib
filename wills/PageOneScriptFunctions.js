//script one
//add eventhandler to ContentArea containing nav img[s]
//ContentArea is devided into 4 quadrants
//event handler captures which quadrant was clicked
//and saves this information to local storage
//on the next page this will be retrieved
//and depending on what the handler stored
// (which quardrant fired the event)
// one of four templates is selected.
'use strict';
var contentArea = document.getElementById('content_area');
contentArea.addEventListner(click, clickHandler());


/**///here is a handler that will use the mouse position
//to determin which template the user selects
function clickHandler(event){
//collect mouse location
  function doSomething(e) {
    var posx = 0;
    var posy = 0;
    if (!e) /*var*/ e = window.event; //original code edited
    if (e.pageX || e.pageY) 	{
      posx = e.pageX;
      posy = e.pageY;
    }
    else if (e.clientX || e.clientY) 	{
      posx = e.clientX + document.body.scrollLeft
      + document.documentElement.scrollLeft;
      posy = e.clientY + document.body.scrollTop
      + document.documentElement.scrollTop;
    }
    return[posx, posy ];
    /*CITE >>>>>http://www.quirksmode.org/js/events_properties.html
    QuirksMode.org is the prime source for browser compatibility
    information on the Internet. It is maintained by Peter-Paul Koch,
     mobile platform strategist in Amsterdam, the Netherlands.*/
  }
  var mouseLocation = doSomething();
  var x = mouseLocation[0];
  var y = mouseLocation[1];
  var templateSelection;
  if (x /*x is grater than halfway accross the width of the contentArea*/ ) {

  //the right half of contentArea, (pop, country)
    if(false/*y is greater than halfway down the height of contentArea*/){
    //lower right corner
      templateSelection = 'country';
    }
    else {
      //upper right corner
      templateSelection = 'pop';
    }
  }
  else{
  //the left half of contentArea
    if(y/*y is greater than halfway down the height of contentArea*/) {
    //lower left corner
      templateSelection = 'r&b';
    }
    else {
    //upper left corner
      templateSelection = 'rock';
    }
  }
  var genreChoice = JSON.stringify(templateSelection);
  localStorage.setItem(genreChoice, genreChoice);
}


/**///here is a handler that will use a grid of four
//divs and determin which template the user selects
// based on which div the event is fired from
function clickHandler2(event){
//collect mouse location
  var divChoice = event.target.id;
  var templateSelection;
  if (divChoice /* div choice is one*/ ) {
      //upper left
    templateSelection = 'rock';
  }
  else if (false /* div choice is two */){
      //upper right corner
    templateSelection = 'pop';
  }
  else if (false /*div choice is three*/){
      //lower left corner
    templateSelection = 'r&b';
  }
  else {
      //lower right corner
    templateSelection = 'country';
  }

  var genreChoice = JSON.stringify(templateSelection);
  localStorage.setItem(genreChoice, genreChoice);
}
