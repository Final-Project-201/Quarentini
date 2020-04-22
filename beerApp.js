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

function newPage() {
    window.location = "resultsPage.html"
}


function clickHandler(event) {
    if (questionCounter < (questionArray.length - 1)) {
        questionCounter++;

        for (var i = 0; i < answersArray.length; i++) {
            // console.log('target', event.target.id);
            // console.log(' answer ', answersArray[i].beerName);
            if (event.target.id === answersArray[i].beerName) {
                for (var j = 0; j < totalResults.length; j++)   {
                    if(answersArray[i].beerName === totalResults[j].name)   {
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
        newPage();
    }
}
console.log(beerResults);


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
var answer2 = new CreateAnswers('images/pexels-photo-1267257.jpeg', 'beerTwo');
var answer3 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerThree');
var answer4 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerFour');
var answer5 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerFive');
var answer6 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerSix');
var answer7 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerSeven');
var answer8 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerEight');
var answer9 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerOne');
var answer10 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerTwo');
var answer11 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerThree');
var answer12 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerFour');
var answer13 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerFive');
var answer14 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerSix');
var answer15 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerSeven');
var answer16 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerEight');
var answer17 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerOne');
var answer18 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerTwo');
var answer19 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerThree');
var answer20 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerFour');
var answer21 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerFive');
var answer22 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerSix');
var answer23 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerSeven');
var answer24 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerEight');
var answer25 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerOne');
var answer26 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerTwo');
var answer27 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerThree');
var answer28 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerFour');
var answer29 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerFive');
var answer30 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerSix');
var answer31 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerSeven');
var answer32 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerEight');
var answer33 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerOne');
var answer34 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerTwo');
var answer35 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerThree');
var answer36 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerFour');
var answer37 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerFive');
var answer38 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerSix');
var answer39 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerSeven');
var answer40 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'beerEight');


var beer1 = new CreateBeerResults('beerOne','images/pexels-photo-1028637.jpeg')
var beer2 = new CreateBeerResults('beerTwo','images/pexels-photo-1028637.jpeg')
var beer3 = new CreateBeerResults('beerThree','images/pexels-photo-1028637.jpeg')
var beer4 = new CreateBeerResults('beerFour','images/pexels-photo-1028637.jpeg')
var beer5 = new CreateBeerResults('beerFive','images/pexels-photo-1028637.jpeg')
var beer6 = new CreateBeerResults('beerSix','images/pexels-photo-1028637.jpeg')
var beer7 = new CreateBeerResults('beerSeven','images/pexels-photo-1028637.jpeg')
var beer8 = new CreateBeerResults('beerEight','images/pexels-photo-1028637.jpeg')










render();