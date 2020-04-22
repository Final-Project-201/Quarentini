'use strict';
// The purpose of this file is to create an active mouseover effect for each test's hero image.

// Poked around on MDN web docs and found a perfect example to adapt to our app! URL: https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event

// JQuery mouseover method. URL: https://www.w3schools.com/jquery/event_mouseover.asp could be a simpler way to do it but I need to study it more.

// $("p").mouseover(function(){
//     $("p").css("background-color", "yellow");
//   });

var mouseTarget = document.getElementById("heroImg");
  
// This handler will be executed only once when the cursor
// moves over the unordered list
mouseTarget.addEventListener('mouseenter', function( event ) {   
  // highlight the mouseenter target
  event.target.style.opacity = '0.4' ;

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.opacity = "";
  }, 500);
}, false);

// This handler will be executed every time the cursor
// is moved over a different list item
mouseTarget.addEventListener('mouseover', function( event ) {

  // highlight the mouseover target
  event.target.style.opacity = '0.25' ;

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.opacity = "";
  }, 500);
}, false);