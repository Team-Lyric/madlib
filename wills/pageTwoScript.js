'use strict';
/*
1 retrieve template selection token from local storage
 a. check fo in storage
 b. get from stroage
 c. parse, read and record
2. set page style
  a. check genre choice
  b. match with appropriate style class
  c. aply style class to all elements
3 prompt, collect, store user data
//prompt for user name and email, establish genre specific visual theme
 a. indentify and capture first form element DOM node
 b. change element property from hidden. //reveals fisrt form
  >>>form one<<<
   I. Collect record and save user data
   II. Identify input elements and capture, add event listener<<<streth goaql of adding ie8 fix for absence of addeventlistner method
   III. on submit store and save user name and email in local storage
   IV. hide form one
 c. reveal form two div
  I. identify template selection from local
  II. init counter for that template
  III. load begin message, alert?, display, clear, add event handler
  IV. begin to transfer parts of speach (noun, verb, etc.) from template's inputTypes array
  V. display each part of speach
  VI. event handler:
    a. stores user input in templte's userAdditions array
    b. itterate counter
    c. get and pdisplay next part of speach and repeat until end of array.
  IX. give message when done, button changes from NEXT to DONE.
    a. event handler: if usermodtemp array.length === (templateinputtype array - 1)
      //then user is entering last of the new contet.
    b. then change NEXT to DONE
    c. event handler: if array length are the same, user is DONE
    d. hide this form div
  X. declare a string of useres modifed template.
  XI. get, parse and store as string username
  XII. stringify and save an array with strings: [username , user modified template string]
  XIII. reveal last div (dipla finished lyriclib and controlls)
    a. if not part of lst div, but part of backgrounhtml, unblur controlls
    b. new form new eventlistner and handler
    c. pipe in text to appropriate element to display useres completed template.(LyricLIB)
  XIV. conrolls form  event handler
  XV. handler for share options: widget, submit to hallof fame>?
  XVI. if submit to hall of fame save a token to local storage saying so
    a. on load of HoF page check for token, if they chose to submit:
      1.get ellemtn by ID last li in ul id= hoflist (buttons that call a hof handler)
        I. HOF handler: show hidden amd fill div with corresponding "saved lyriclib" show lyrics and author in revealed div
      2. is they chose submit, create a new li button that reveals the div and displays the corresponding (saved to local storage/ "submitted") LyricLibs
      3. do this for as many lyriclibs they have saved in local storage (keep a counter)
*/
