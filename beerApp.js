'use-strict';

var questionArray = [];
var questionCounter = 0;
var answersArray = [];
var answersCounter = 0;
var beerResults = [];
var totalResults = [];

function CreateQuestion(ask) {
    this.ask = ask;
    questionArray.push(this);
}

function CreateAnswers(imgsrc, beerName) {
    this.beerName = beerName;
    this.imgsrc = imgsrc;
    this.voteCount = 0;
    answersArray.push(this);
}

function CreateBeerResults(name, image) {
    this.name = name;
    this.vote = 0;
    this.image = image;
    totalResults.push(this);
    beerResults.push(this.vote);

}

function render() {
    var target = document.getElementById('ask');
    var newP = document.createElement('p');
    newP.textContent = selectQuestion();
    target.appendChild(newP);

    for (var i = 0; i < 4; i++) {
        var targetUl = document.getElementById('list');
        var newLi = document.createElement('li');
        var newImg = document.createElement('img');
        var selectedAnswer = selectAnswer();
        newImg.src = selectedAnswer.imgsrc;
        newImg.id = selectedAnswer.beerName;
        newLi.appendChild(newImg);
        targetUl.appendChild(newLi);
        answersCounter++;
    }
}

function selectQuestion() {
    var select = questionArray[questionCounter].ask;

    return select;
}

function selectAnswer() {

    return answersArray[answersCounter];
}

var pickNew = document.getElementById('list');
pickNew.addEventListener('click', clickHandler);

function removeQuestion() {
    var toDelete = document.getElementById('ask');
    toDelete.innerHTML = '';
}

function removeAnswers() {
    var toDelete = document.getElementById('list');
    toDelete.innerHTML = '';
}

function storedInLocalStorage() {
    var beerArrayString = JSON.stringify(beerResults);
    localStorage.setItem('finalBeerResult', beerArrayString);

};

function newPage() {
    window.location = "resultsPage.html";
}



function clickHandler(event) {
    if (questionCounter < (questionArray.length - 1)) {
        questionCounter++;

        for (var i = 0; i < answersArray.length; i++) {
            // console.log('target', event.target.id);
            // console.log(' answer ', answersArray[i].beerName);
            if (event.target.id === answersArray[i].beerName) {
                for (var j = 0; j < totalResults.length; j++) {
                    if (answersArray[i].beerName === totalResults[j].name) {
                        totalResults[j].vote++;
                        beerResults[j] += totalResults[j].vote;

                    }
                }

            }
        }
        removeQuestion();
        removeAnswers();
        render();
    } else {
        storedInLocalStorage();
        newPage();

    }
}



var question1 = new CreateQuestion('Which of these is your ideal vacation spot?');
var question2 = new CreateQuestion('Select the recreational activity that is your favorite.');
var question3 = new CreateQuestion('Which of these images describes your ideal Friday night?');
var question4 = new CreateQuestion('Select the fashion that best describes you.');
var question5 = new CreateQuestion('Out of the T.V. shows below, which one would you most like to watch?');
var question6 = new CreateQuestion('Which time period would you most want to travel in time to?');
var question7 = new CreateQuestion('If someone were to surprise you with food, what kind of food would you hope to get?');
var question8 = new CreateQuestion('Which career describes you best?');
var question9 = new CreateQuestion('If you had all the money in the world, which car would you choose below?');
var question10 = new CreateQuestion('Who\'s Zoo would you rather visit?');


var answer1 = new CreateAnswers('images/answerImages/aspen.jpg', 'Black Butte Porter');
var answer2 = new CreateAnswers('images/answerImages/newyork.jpg', 'Stella Artois');
var answer3 = new CreateAnswers('images/answerImages/tahiti.jpg', 'Shocktop');
var answer4 = new CreateAnswers('images/answerImages/vegas.jpg', 'Fat Tire');
var answer5 = new CreateAnswers('images/answerImages/basketball.jpg', 'Manny\'s Pale Ale');
var answer6 = new CreateAnswers('images/answerImages/videogame.jpg', 'Lagunitas IPA');
var answer7 = new CreateAnswers('images/answerImages/workingout.jpg', 'Stella Artois');
var answer8 = new CreateAnswers('images/answerImages/socializing.jpg', 'Alaskan Amber');
var answer9 = new CreateAnswers('images/answerImages/reading.jpg', 'Black Butte Porter');
var answer10 = new CreateAnswers('images/answerImages/sportsbar.jpg', 'Manny\'s Pale Ale');
var answer11 = new CreateAnswers('images/answerImages/pub.jpg', 'Bodihizafa');
var answer12 = new CreateAnswers('images/answerImages/clubbing.jpg', 'Lagunitas IPA');
var answer13 = new CreateAnswers('images/answerImages/countrygirl.jpg', 'Shocktop');
var answer14 = new CreateAnswers('images/answerImages/businesscasual.jpg', 'Stella Artois');
var answer15 = new CreateAnswers('images/answerImages/mountaingirl.jpg', 'Black Butte Porter');
var answer16 = new CreateAnswers('images/answerImages/hipster-with-beard.jpg', 'Bodihizafa');
var answer17 = new CreateAnswers('images/answerImages/fottballtv.jpg', 'Alaskan Amber');
var answer18 = new CreateAnswers('images/answerImages/survivor.jpg', 'Fat Tire');
var answer19 = new CreateAnswers('images/answerImages/ricknmorty.jpg', 'Shocktop');
var answer20 = new CreateAnswers('images/answerImages/ozark.jpg', 'Black Butte Porter');
var answer21 = new CreateAnswers('images/answerImages/roaringtwenties.jpg', 'Stella Artois');
var answer22 = new CreateAnswers('images/answerImages/fifties.jpg', 'Fat Tire');
var answer23 = new CreateAnswers('images/answerImages/seventies.jpg', 'Shocktop');
var answer24 = new CreateAnswers('images/answerImages/eighties.jpg', 'Manny\'s Pale Ale');
var answer25 = new CreateAnswers('images/answerImages/burger.jpg', 'Alaskan Amber');
var answer26 = new CreateAnswers('images/answerImages/sushi.jpg', 'Shocktop');
var answer27 = new CreateAnswers('images/answerImages/tacos.jpg', 'Lagunitas IPA');
var answer28 = new CreateAnswers('images/answerImages/pasta.jpg', 'Stella Artois');
var answer29 = new CreateAnswers('images/answerImages/software.jpg', 'Bodihizafa');
var answer30 = new CreateAnswers('images/answerImages/wallstreet.jpg', 'Fat Tire');
var answer31 = new CreateAnswers('images/answerImages/teacher.jpg', 'Black Butte Porter');
var answer32 = new CreateAnswers('images/answerImages/farmer.jpg', 'Manny\'s Pale Ale');
var answer33 = new CreateAnswers('images/answerImages/bentely.jpg', 'Manny\'s Pale Ale');
var answer34 = new CreateAnswers('images/answerImages/gwagon.jpg', 'Lagunitas IPA');
var answer35 = new CreateAnswers('images/answerImages/jaguar.jpg', 'Alaskan Amber');
var answer36 = new CreateAnswers('images/answerImages/audi.jpeg', 'Bodihizafa');
var answer37 = new CreateAnswers('images/answerImages/tigerking.png', 'Bodihizafa');
var answer38 = new CreateAnswers('images/answerImages/baskin.jpg', 'Alaskan Amber');
var answer39 = new CreateAnswers('images/answerImages/antle.jpg', 'Fat Tire');
var answer40 = new CreateAnswers('images/answerImages/lowe.jpg', 'Lagunitas IPA');


var beer1 = new CreateBeerResults('Manny\'s Pale Ale', 'images/answerImages/mannys.jpg');
var beer2 = new CreateBeerResults('Bodihizafa', 'images/answerImages/bodi.png');
var beer3 = new CreateBeerResults('Shocktop', 'images/answerImages/shocktop.png');
var beer4 = new CreateBeerResults('Alaskan Amber', 'images/answerImages/alskan.jpg');
var beer5 = new CreateBeerResults('Fat Tire', 'images/answerImages/fattire.jpg');
var beer6 = new CreateBeerResults('Stella Artois', 'images/answerImages/stella.jpg');
var beer7 = new CreateBeerResults('Lagunitas IPA', 'images/answerImages/lagunitas.png');
var beer8 = new CreateBeerResults('Black Butte Porter', 'images/answerImages/blackbutte.jpg');










render();