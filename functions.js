'use-strict';

var questionArray = [];
var questionCounter = 0;
var answersArray = [];
var answersCounter = 0;

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
        newImg.id = selectedAnswer.name;
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

function newPage() {
    window.location = "resultsPage.html"
}


function clickHandler(event) {
    if (questionCounter < (questionArray.length - 1)) {
        questionCounter++;

        for (var i = 0; i < answersArray.length; i++) {

            if (event.target.id === answersArray[i].name) {
                // answersArray[i].voteCount++;
                if (answersArray[i].beerName)
            }

            console.log('target', event.target.id);
            console.log(' answer ', answersArray[i].voteCount);
        }
        removeQuestion();
        removeAnswers();
        render();
    } else {
        newPage();
    }
}



var question1 = new CreateQuestion('Question 1');
var question2 = new CreateQuestion('Question 2');
var question3 = new CreateQuestion('Question 3');
var question4 = new CreateQuestion('Question 4');
var question5 = new CreateQuestion('Question 5');
var question6 = new CreateQuestion('Question 6');
var question7 = new CreateQuestion('Question 7');
var question8 = new CreateQuestion('Question 8');
var question9 = new CreateQuestion('Question 9');
var question10 = new CreateQuestion('Question 10');


var answer1 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerOne');
var answer2 = new CreateAnswers('images/pexels-photo-1267257.jpeg', 'beerOne');
var answer3 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerOne');
var answer4 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerOne');
var answer5 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerTwo');
var answer6 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerTwo');
var answer7 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerTwo');
var answer8 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerTwo');
var answer9 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerThree');
var answer10 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerThree');
var answer11 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerThree');
var answer12 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerThree');
var answer13 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerFour');
var answer14 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerFour');
var answer15 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerFour');
var answer16 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerFour');
var answer17 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerFive');
var answer18 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerFive');
var answer19 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerFive');
var answer20 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerFive');
var answer21 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerSix');
var answer22 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerSix');
var answer23 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerSix');
var answer24 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerSix');
var answer25 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerSeven');
var answer26 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerSeven');
var answer27 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerSeven');
var answer28 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerSeven');
var answer29 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerEight');
var answer30 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerEight');
var answer31 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerEight');
var answer32 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerEight');
var answer33 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerNine');
var answer34 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerNine');
var answer35 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerNine');
var answer36 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerNine');
var answer37 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerTen');
var answer38 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerTen');
var answer39 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerTen');
var answer40 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerTen');












render();