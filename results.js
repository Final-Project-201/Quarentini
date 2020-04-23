'use-strict'


var totalBeerResults = [];
var totalLiquorResults = [];
var biggest = 0;

function CreateBeerResults(name, image) {
    this.name = name;
    this.image = image;
    totalBeerResults.push(this);
}

function CreateLiquorResults(name, image) {
    this.name = name;
    this.image = image;
    totalLiquorResults.push(this);
}

function restoreFromLocal() {

    if (JSON.parse(localStorage.getItem('finalLiquorResult'))) {
        var finalRestore = JSON.parse(localStorage.getItem('finalLiquorResult'));

    }
    if (JSON.parse(localStorage.getItem('finalBeerResult'))) {
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
    // localStorage.clear(finalRestore);

}

function renderPartTwo() {
    var targetSection = document.getElementById('beerresults');
    var newP = document.createElement('p');
    var newImage = document.createElement('img');
    if ()
    newImage.src = totalResults[biggest].image;
    newP.appendChild(newImage);
    targetSection.appendChild(newP);


}


var beer1 = new CreateBeerResults('Manny\'s Pale Ale', 'images/answerImages/mannys.jpg');
var beer2 = new CreateBeerResults('Bodihizafa', 'images/answerImages/bodi.png');
var beer3 = new CreateBeerResults('Shocktop', 'images/answerImages/shocktop.png');
var beer4 = new CreateBeerResults('Alaskan Amber', 'images/answerImages/alskan.jpg');
var beer5 = new CreateBeerResults('Fat Tire', 'images/answerImages/fattire.jpg');
var beer6 = new CreateBeerResults('Stella Artois', 'images/answerImages/stella.jpg');
var beer7 = new CreateBeerResults('Lagunitas IPA', 'images/answerImages/lagunitas.png');
var beer8 = new CreateBeerResults('Black Butte Porter', 'images/answerImages/blackbutte.jpg');

var liquor1 = new CreateLiquorResults('Old Fashioned', 'images/answerImages/oldfashioned.jpg');
var liquor2 = new CreateLiquorResults('Long Island', 'images/answerImages/longisland.jpg');
var liquor3 = new CreateLiquorResults('French 75', 'images/answerImages/french.jpg');
var liquor4 = new CreateLiquorResults('Jack & Coke', 'images/answerImages/jackncoke.jpg');
var liquor5 = new CreateLiquorResults('Gin & Tonic', 'images/answerImages/ginntonic.jpg');
var liquor6 = new CreateLiquorResults('Lemon Drop', 'images/answerImages/lemondrop.jpg');
var liquor7 = new CreateLiquorResults('Tequila Sunrise', 'images/answerImages/tequilas.jpg');
var liquor8 = new CreateLiquorResults('Pear Kamikaze', 'images/answerImages/Kamikaze.jpg');


restoreFromLocal();



renderPartTwo();

