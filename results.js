'use-strict'


var totalResults = [];
var totalLiquorResults = [];
var biggest = 0;


function restoreFromLocal() {
// debugger
    if (JSON.parse(localStorage.getItem('finalLiquorResult'))) {
        var finalRestore = JSON.parse(localStorage.getItem('finalLiquorResult'));

    }
    if (JSON.parse(localStorage.getItem('finalBeerResult'))) {
        var finalRestore = JSON.parse(localStorage.getItem('finalBeerResult'));
    }

    
    var totalResultsTest = JSON.parse(localStorage.getItem('totalResults'));


    totalResults = totalResultsTest;

    
    var biggestIndex = 0;
    var biggestValue = 0;

    for (var i = 0; i < finalRestore.length; i++) {

        if (finalRestore[i] > biggestValue) {
            biggestIndex = i;
            biggestValue = finalRestore[i];
        }
        biggest = biggestIndex;
    }

    localStorage.clear(finalRestore);


   
}
 
function renderPartTwo() {

    var targetPSection = document.getElementById('item-a');
    var newP = document.createElement('p');
    newP.textContent = totalResults[biggest].name + ' is the drink for you!'; 
    targetPSection.appendChild(newP);
    
    var targetSection = document.getElementById('results');
    var newImage = document.createElement('img');
    newImage.src = totalResults[biggest].image;
    newP.appendChild(newImage);
    targetSection.appendChild(newImage);

}



restoreFromLocal();
 renderPartTwo();

