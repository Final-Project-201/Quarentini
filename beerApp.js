'use-strict';

var questionArray = [];
var questionCounter = 0;
var answersArray = [];
var answersCounter = 0;

function CreateQuestion(ask) {
    this.ask = ask;
    questionArray.push(this);
}

function CreateAnswers(imgsrc, name) {
    this.name = name;
    this.imgsrc = imgsrc;
    this.class = '.imgclass';
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
            console.log('target', event.target.id);
            console.log(' answer ', answersArray[i].name);
            if (event.target.id === answersArray[i].name) {
                answersArray[i].voteCount++;

            }
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
// var question4 = new CreateQuestion('Question 4');
// var question5 = new CreateQuestion('Question 5');
// var question6 = new CreateQuestion('Question 6');
// var question7 = new CreateQuestion('Question 7');
// var question8 = new CreateQuestion('Question 8');
// var question9 = new CreateQuestion('Question 9');
// var question10 = new CreateQuestion('Question 10');


var answer1 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'nameOne');
var answer2 = new CreateAnswers('images/pexels-photo-1267257.jpeg', 'nameTwo');
var answer3 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'nameFour');
var answer4 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'nameThree');
var answer5 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'namefive');
var answer6 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'namesix');
var answer7 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'nameseven');
var answer8 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'nameeight');
var answer9 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'namenine');
var answer10 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'nameten');
var answer11 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'nameeleven');
var answer12 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'nanetwelve');
// var answer13 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer14 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer15 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer16 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer17 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer18 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer19 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer20 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer21 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer22 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer23 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer24 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer25 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer26 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer27 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer28 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer29 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer30 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer31 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer32 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer33 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer34 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer35 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer36 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer37 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer38 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer39 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');
// var answer40 = new CreateAnswers('images/your-moves-are-5b24a2.jpg');












render();