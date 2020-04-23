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


var answer1 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorOne');
var answer2 = new CreateAnswers('images/pexels-photo-1267257.jpeg', 'liquorTwo');
var answer3 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorThree');
var answer4 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorFour');
var answer5 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorFive');
var answer6 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorSix');
var answer7 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorSeven');
var answer8 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorEight');
var answer9 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorOne');
var answer10 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorTwo');
var answer11 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorThree');
var answer12 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorFour');
var answer13 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorFive');
var answer14 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorSix');
var answer15 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorSeven');
var answer16 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorEight');
var answer17 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorOne');
var answer18 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorTwo');
var answer19 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorThree');
var answer20 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorFour');
var answer21 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorFive');
var answer22 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorSix');
var answer23 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorSeven');
var answer24 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorEight');
var answer25 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorOne');
var answer26 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorTwo');
var answer27 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorThree');
var answer28 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorFour');
var answer29 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorFive');
var answer30 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorSix');
var answer31 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorSeven');
var answer32 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorEight');
var answer33 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorOne');
var answer34 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorTwo');
var answer35 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorThree');
var answer36 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorFour');
var answer37 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorFive');
var answer38 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorSix');
var answer39 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorSeven');
var answer40 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'liquorEight');


var liquor1 = new CreateLiquorResults('liquorOne', 'images/pexels-photo-1028637.jpeg');
var liquor2 = new CreateLiquorResults('liquorTwo', 'images/pexels-photo-1028637.jpeg');
var liquor3 = new CreateLiquorResults('liquorThree', 'images/pexels-photo-1028637.jpeg');
var liquor4 = new CreateLiquorResults('liquorFour', 'images/pexels-photo-1028637.jpeg');
var liquor5 = new CreateLiquorResults('liquorFive', 'images/pexels-photo-1028637.jpeg');
var liquor6 = new CreateLiquorResults('liquorSix', 'images/pexels-photo-1028637.jpeg');
var liquor7 = new CreateLiquorResults('liquorSeven', 'images/pexels-photo-1028637.jpeg');
var liquor8 = new CreateLiquorResults('liquorEight', 'images/pexels-photo-1028637.jpeg');










render();