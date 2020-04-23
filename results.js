'use-strict'


var totalResults = [];
var biggest = 0;

function CreateBeerResults(name, image) {
    this.name = name;
    this.image = image;
    totalResults.push(this);

}

function restoreFromLocal() {

    if (JSON.parse(localStorage.getItem('finalLiquorResult'))) {
        var finalRestore = JSON.parse(localStorage.getItem('finalLiquorResult'));
    
}   if (JSON.parse(localStorage.getItem('finalBeerResult'))){
        var finalRestore = JSON.parse(localStorage.getItem('finalBeerResult'));
}
    var biggestIndex = 0;
    var biggestValue = 0;

    for (var i = 0; i < finalRestore.length; i++) {

        if (finalRestore[i] > biggestValue) {
            biggestIndex = i;
            biggestValue = finalRestore[i];
        }
        biggest = biggestIndex;
    }
    console.log(finalRestore);
    console.log('The biggest index: ' + biggestIndex);
    localStorage.clear(finalRestore);

}

function renderPartTwo() {
    var targetSection = document.getElementById('beerresults');
    var newP = document.createElement('p');
    var newImage = document.createElement('img');
    newImage.src = totalResults[biggest].image;
    newP.appendChild(newImage);
    targetSection.appendChild(newP);


}


var beer1 = new CreateBeerResults('beerOne', 'images/pexels-photo-1028637.jpeg');
var beer2 = new CreateBeerResults('beerTwo', 'images/pexels-photo-1028637.jpeg');
var beer3 = new CreateBeerResults('beerThree', 'images/pexels-photo-1028637.jpeg');
var beer4 = new CreateBeerResults('beerFour', 'images/pexels-photo-1028637.jpeg');
var beer5 = new CreateBeerResults('beerFive', 'images/pexels-photo-1028637.jpeg');
var beer6 = new CreateBeerResults('beerSix', 'images/pexels-photo-1028637.jpeg');
var beer7 = new CreateBeerResults('beerSeven', 'images/pexels-photo-1028637.jpeg');
var beer8 = new CreateBeerResults('beerEight', 'images/pexels-photo-1028637.jpeg');


restoreFromLocal();



renderPartTwo();