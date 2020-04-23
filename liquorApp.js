'use-strict';

var questionArray = [];
var questionCounter = 0;
var answersArray = [];
var answersCounter = 0;
var liquorResults = [];
var totalResults = [];

function CreateQuestion(ask) {
    this.ask = ask;
    questionArray.push(this);
}

function CreateAnswers(imgsrc, liquorName) {
    this.liquorName = liquorName;
    this.imgsrc = imgsrc;
    this.voteCount = 0;
    answersArray.push(this);
}

function CreateLiquorResults(name, image) {
    this.name = name;
    this.vote = 0;
    this.image = image;
    totalResults.push(this);
    liquorResults.push(this.vote);

}

function render() {
    var target = document.getElementById('pick');
    var newP = document.createElement('p');
    newP.textContent = selectQuestion();
    target.appendChild(newP);

    for (var i = 0; i < 4; i++) {
        var targetUl = document.getElementById('list');
        var newLi = document.createElement('li');
        var newImg = document.createElement('img');
        var selectedAnswer = selectAnswer();
        newImg.src = selectedAnswer.imgsrc;
        newImg.id = selectedAnswer.liquorName;
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
    var toDelete = document.getElementById('pick');
    toDelete.innerHTML = '';
}

function removeAnswers() {
    var toDelete = document.getElementById('list');
    toDelete.innerHTML = '';
}

function storedInLocalStorage() {
    var liquorArrayString = JSON.stringify(liquorResults);
    localStorage.setItem('finalLiquorResult', liquorArrayString);

};

function newPage() {
    window.location = "resultsPage.html";
}



function clickHandler(event) {
    if (questionCounter < (questionArray.length - 1)) {
        questionCounter++;

        for (var i = 0; i < answersArray.length; i++) {
            // console.log('target', event.target.id);
            // console.log(' answer ', answersArray[i].liquorName);
            if (event.target.id === answersArray[i].liquorName) {
                for (var j = 0; j < totalResults.length; j++) {
                    if (answersArray[i].liquorName === totalResults[j].name) {
                        totalResults[j].vote++;
                        liquorResults[j] += totalResults[j].vote;

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


var answer1 = new CreateAnswers('images/answerImages/aspen.jpg', 'Old Fashioned');
var answer2 = new CreateAnswers('images/answerImages/newyork.jpg', 'Lemon Drop');
var answer3 = new CreateAnswers('images/answerImages/tahiti.jpg', 'French 75');
var answer4 = new CreateAnswers('images/answerImages/vegas.jpg', 'Long Island');
var answer5 = new CreateAnswers('images/answerImages/basketball.jpg', 'Jack & Coke');
var answer6 = new CreateAnswers('images/answerImages/videogame.jpg', 'Gin & Tonic');
var answer7 = new CreateAnswers('images/answerImages/workingout.jpg', 'Lemon Drop');
var answer8 = new CreateAnswers('images/answerImages/socializing.jpg', 'Tequila Sunrise');
var answer9 = new CreateAnswers('images/answerImages/reading.jpg', 'Old Fashioned');
var answer10 = new CreateAnswers('images/answerImages/sportsbar.jpg', 'Jack & Coke');
var answer11 = new CreateAnswers('images/answerImages/pub.jpg', 'Pear Kamikaze');
var answer12 = new CreateAnswers('images/answerImages/clubbing.jpg', 'Gin & Tonic');
var answer13 = new CreateAnswers('images/answerImages/countrygirl.jpg', 'French 75');
var answer14 = new CreateAnswers('images/answerImages/businesscasual.jpg', 'Lemon Drop');
var answer15 = new CreateAnswers('images/answerImages/mountaingirl.jpg', 'Old Fashioned');
var answer16 = new CreateAnswers('images/answerImages/hipster-with-beard.jpg', 'Pear Kamikaze');
var answer17 = new CreateAnswers('images/answerImages/fottballtv.jpg', 'Tequila Sunrise');
var answer18 = new CreateAnswers('images/answerImages/survivor.jpg', 'Long Island');
var answer19 = new CreateAnswers('images/answerImages/ricknmorty.jpg', 'French 75');
var answer20 = new CreateAnswers('images/answerImages/ozark.jpg', 'Old Fashioned');
var answer21 = new CreateAnswers('images/answerImages/roaringtwenties.jpg', 'Lemon Drop');
var answer22 = new CreateAnswers('images/answerImages/fifties.jpg', 'Long Island');
var answer23 = new CreateAnswers('images/answerImages/seventies.jpg', 'French 75');
var answer24 = new CreateAnswers('images/answerImages/eighties.jpg', 'Jack & Coke');
var answer25 = new CreateAnswers('images/answerImages/burger.jpg', 'Tequila Sunrise');
var answer26 = new CreateAnswers('images/answerImages/sushi.jpg', 'French 75');
var answer27 = new CreateAnswers('images/answerImages/tacos.jpg', 'Gin & Tonic');
var answer28 = new CreateAnswers('images/answerImages/pasta.jpg', 'Lemon Drop');
var answer29 = new CreateAnswers('images/answerImages/software.jpg', 'Pear Kamikaze');
var answer30 = new CreateAnswers('images/answerImages/wallstreet.jpg', 'Long Island');
var answer31 = new CreateAnswers('images/answerImages/teacher.jpg', 'Old Fashioned');
var answer32 = new CreateAnswers('images/answerImages/farmer.jpg', 'Jack & Coke');
var answer33 = new CreateAnswers('images/answerImages/bentely.jpg', 'Jack & Coke');
var answer34 = new CreateAnswers('images/answerImages/gwagon.jpg', 'Gin & Tonic');
var answer35 = new CreateAnswers('images/answerImages/jaguar.jpg', 'Tequila Sunrise');
var answer36 = new CreateAnswers('images/answerImages/audi.jpeg', 'Pear Kamikaze');
var answer37 = new CreateAnswers('images/answerImages/tigerking.png', 'Pear Kamikaze');
var answer38 = new CreateAnswers('images/answerImages/baskin.jpg', 'Tequila Sunrise');
var answer39 = new CreateAnswers('images/answerImages/antle.jpg', 'Long Island');
var answer40 = new CreateAnswers('images/answerImages/lowe.jpg', 'Gin & Tonic');


var liquor1 = new CreateLiquorResults('Old Fashioned', 'images/answerImages/oldfashioned.jpg');
var liquor2 = new CreateLiquorResults('Long Island', 'images/answerImages/longisland.jpg');
var liquor3 = new CreateLiquorResults('French 75', 'images/answerImages/french.jpg');
var liquor4 = new CreateLiquorResults('Jack & Coke', 'images/answerImages/jackncoke.jpg');
var liquor5 = new CreateLiquorResults('Gin & Tonic', 'images/answerImages/ginntonic.jpg');
var liquor6 = new CreateLiquorResults('Lemon Drop', 'images/answerImages/lemondrop.jpg');
var liquor7 = new CreateLiquorResults('Tequila Sunrise', 'images/answerImages/tequilas.jpg');
var liquor8 = new CreateLiquorResults('Pear Kamikaze', 'images/answerImages/Kamikaze.jpg');










render();