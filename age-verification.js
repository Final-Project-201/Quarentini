'use strict';

// The purpose of this code is simply to verify the user's age. Upon entry to the site the user is forced to answer a prompt before being allowed to continue to our content.

/* Here's what we need: 
    1. prompt, please enter your age.
    2. if age > 21, alert the user that they're welcome to the site and move them to our homepage.
    3. anything less than 21, and the user is alert to come back in a couple years and blocks access to the site.
    4. eventually, we want to log this into memory to prevent access in the same session by refresh.
*/

//Initial age verification function

function ageVerification (event) {
    var imgId = event.target.id
    console.log(imgId);
    var agePrompt = parseInt(prompt("How old are you, anyway? Please, enter your age in years."));
    if (agePrompt >= 20) {
        alert('Great have a seat, someone will be with you shortly!');
        var name = prompt('Please enter your name.');
        var email = prompt('Enter your email as well.');
        localStorage.setItem('name', name)
        localStorage.setItem('email', email)
        if (imgId === 'beer') {
            window.location.replace('beerTest.html');
        } else {
            window.location.replace('liquorTest.html');
        }
    } else {
        alert('Now enter your mother\'s phone number so we let her know what naughty child she has')
    }
}

var mainEl = document.getElementById('main');
mainEl.addEventListener('click', ageVerification); 