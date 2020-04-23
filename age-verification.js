'use strict';

// The purpose of this code is simply to verify the user's age. Upon entry to the site the user is forced to answer a prompt before being allowed to continue to our content.

// Get the modal
var modal = document.getElementById("ageVerModal");
// Get the forms and add an event listeners for each.
var ageVeriForm = document.getElementById("ageVeriForm");

var visitorInfoForm = document.getElementsByClassName("modal")[0];

//clik handler for submit button on our age form.
ageVeriForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var age = event.target.age.value;
    localStorage.setItem ('ageVer', age);
//     if (age >= 21) {
//         ageVeriForm.innerHTML = "";
//         modal.style.display = "block";
//     }
// });
    if (age >= 21) {
        if (pictureId === 'beerHeroImg') {
            window.location.href = "beerTest.html";
        } else {
            window.location.href = "liquorTest.html";
        }
    }
});

//clik handler for submit button on our visitor info form.
// visitorInfoForm.addEventListener('submit', function (event) {
//     event.preventDefault();

//     var firstName = event.target.firstName;
//     var lastName = event.target.lastName;
//     var email = event.target.email;

//     localStorage.setItem ('visitorInfo', firstName, lastName, email);
//     if (age >= 21) {
//         if (pictureId === 'beerHeroImg') {
//             window.location.href = "beerTest.html";
//         } else {
//             window.location.href = "liquorTest.html";
//         }
//     }
// });

// Get the trigger that opens the modal.
var modalTrigger = document.getElementById("needsAgeVer");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

var pictureId;

// When the user clicks on the tigger, open the modal
modalTrigger.addEventListener('click', function(e) {
    e.preventDefault();
    pictureId = event.target.id;
    
    modal.style.display = "block";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "block";
  }
};

// function modalClickHandler () {}