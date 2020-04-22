'use-strict';

var questionArray = [];
var questionCounter = 0;
var answersArray = [];
var answersCounter = 0;

function CreateQuestion(ask){
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

function render()  {
  var target = document.getElementById('ask');
  var newP = document.createElement('p');
  newP.textContent = selectQuestion();
  target.appendChild(newP);

  for (var i = 0; i < 4; i++) {
    var targetUl = document.getElementById('list');
    var newLi = document.createElement('li');
    newLi.src = selectAnswer();
    newLi.textContent = answersArray[answersCounter].name;
    targetUl.appendChild(newLi);
    answersCounter++
  }
}

function selectQuestion() {
  var select = questionArray[questionCounter].ask;
  
  return select;
}

function selectAnswer() {
  var img = answersArray[answersCounter].imgsrc;

  return img;
}

var pickNew = document.getElementById('list');
pickNew.addEventListener('click', clickHandler);

function removeQuestion() {
  var toDelete = document.getElementById('ask');
  toDelete.innerHTML = '';
}

function removeAnswers()  {
  var toDelete = document.getElementById('list');
  toDelete.innerHTML = '';
}

function newPage()  {
  window.location="resultsPage.html"
}


function clickHandler(event)  {
  if (questionCounter < (questionArray.length - 1)) {
    questionCounter++
    for (var i = 0; i < answersArray.length; i++)
      if (event.target.name === answersArray[i].name) {
        answersArray[i].voteCount++
      }
    removeQuestion();
    removeAnswers();
    render();
  }
  else  {
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


var answer1 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'a');
var answer2 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 's');
var answer3 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'w');
var answer4 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'r');
var answer5 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 't');
var answer6 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'y');
var answer7 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', '8');
var answer8 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', '5');
var answer9 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'qw');
var answer10 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'asd');
var answer11 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'sa');
var answer12 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'aw');
var answer13 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'af');
var answer14 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'daw');
var answer15 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'was');
var answer16 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'awwds');
var answer17 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'sdaw');
var answer18 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'asdws');
var answer19 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'dwas');
var answer20 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'wdas');
var answer21 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'wdsazx');
var answer22 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'wdszx');
var answer23 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'wdsg');
var answer24 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'hde');
var answer25 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'sdfb');
var answer26 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'res');
var answer27 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'easdf');
var answer28 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'wdsacccx');
var answer29 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'efvds');
var answer30 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'evasa');
var answer31 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'qaaf');
var answer32 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'acsaw');
var answer33 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'xce');
var answer34 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'cesa');
var answer35 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'efg');
var answer36 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'gseg');
var answer37 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'sdve');
var answer38 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'vasdv');
var answer39 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'cdfe');
var answer40 = new CreateAnswers('images/your-moves-are-5b24a2.jpg', 'wevas');












render();