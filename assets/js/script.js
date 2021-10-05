const errorhomeBtn = document.getElementById('errorhomeBtn');

const questionEl = document.getElementById('question');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');

const scoreEl = document.getElementById('scoreEl');
const finalscoreEl = document.getElementById('finalscoreEl');
const giphyEl = document.getElementById('giphyEl');


var catNumber = 0;
var diffSelect = '';
var score = 0;
var currentQuestion = 0;
var questionCounter = 1;
var correctAnswer = '';
var questionArray = [];
var catName = '';
var giphyArray = [];

// Generates whats question the user will recive based on catefory and difficulty selected
function generateQuiz() {
    var apiUrl = "https://opentdb.com/api.php?amount=10&category=" + catNumber + "&difficulty=" + diffSelect + "&type=multiple"
    fetch(apiUrl).then(function(response) {
      if (response.ok) {
        response.json().then(function(data) {
            if (data.response_code === 1) {
                console.log('ERROR MESSAGE');
                document.getElementById("errorPage").style.display = "block";
            } else {
                questionArray = data;
                displayQuestion();
            }
        });
      }
    })
};

// Function to display question to user
var displayQuestion = function() {
    document.getElementById("quizPage").style.display = "block";

    if (questionCounter > 10) {
        setfinalScore();    
    }
    var q = questionArray.results[currentQuestion];
  
    questionEl.innerHTML =  q.question;
        
    var questionOrder = Math.floor(Math.random() * (5));

    if (questionOrder === 1) {
        answer1.textContent = q.incorrect_answers[0];
        answer2.textContent = q.incorrect_answers[1];
        answer3.textContent = q.incorrect_answers[2];
        answer4.textContent = q.correct_answer;
        correctAnswer = '4';
    } else if ( questionOrder === 2) {
        answer1.textContent = q.incorrect_answers[0];
        answer2.textContent = q.incorrect_answers[1];
        answer3.textContent = q.correct_answer;
        answer4.textContent = q.incorrect_answers[2];
        correctAnswer = '3';
    } else if ( questionOrder === 3) {
        answer1.textContent = q.incorrect_answers[0];
        answer2.textContent = q.correct_answer;
        answer3.textContent = q.incorrect_answers[1];
        answer4.textContent = q.incorrect_answers[2];
        correctAnswer = '2';
    } else {
        answer1.textContent = q.correct_answer;
        answer2.textContent = q.incorrect_answers[0];
        answer3.textContent = q.incorrect_answers[1];
        answer4.textContent = q.incorrect_answers[2];
        correctAnswer = '1';
    }
    $('#giphyEl').children().remove();
    generateGiphyAPI();
}

// Function to check if user selected correct answer
function checkAnswer(answer) {
    if (answer === correctAnswer) {
        score=score+10;
        questionCounter++;
        setCounterText();
    } else {
        questionCounter++;
    }

    if (currentQuestion < questionCounter) {
        currentQuestion++;
        displayQuestion();
    }
}

// Category Selectory
function catSelector(category) {
    if (category === '1') {
        catNumber = 9;
        catName = 'General';
    } else if (category === '2') {
        catNumber = 10;
        catName = 'Books';
    } else if (category === '3') {
        catNumber = 11;
        catName = 'Film';
    } else if (category === '4') {
        catNumber = 12;
        catName = 'Music';
    } else if (category === '5') {
        catNumber = 13;
        catName = 'Theatre';
    } else if (category === '6') {
        catNumber = 14;
        catName = 'Television';
    } else if (category === '7') {
        catNumber = 15;
        catName = 'Video Games';
    } else if (category === '8') {
        catNumber = 16;
        catName = 'Board Games';
    } else if (category === '9') {
        catNumber = 17;
        catName = 'Science';
    } else if (category === '10') {
        catNumber = 18;
        catName = 'Computers';
    } else if (category === '11') {
        catNumber = 19;
        catName = 'Math';
    } else if (category === '12') {
        catNumber = 20;
        catName = 'Mythology';
    } else if (category === '13') {
        catNumber = 21;
        catName = 'Sports';
    } else if (category === '14') {
        catNumber = 22;
        catName = 'Geography';
    } else if (category === '15') {
        catNumber = 23;
        catName = 'History';
    } else if (category === '16') {
        catNumber = 24;
        catName = 'Politics';
    } else if (category === '17') {
        catNumber = 25;
        catName = 'Art';
    } else if (category === '18') {
        catNumber = 26;
        catName = 'Celebrities';
    } else if (category === '19') {
        catNumber = 27;
        catName = 'Animals';
    } else if (category === '20') {
        catNumber = 28;
        catName = 'Vehicles';
    } else if (category === '21') {
        catNumber = 29;
        catName = 'Comic Books';
    } else if (category === '22') {
        catNumber = 30;
        catName = 'Gadgets';
    } else if (category === '23') {
        catNumber = 31;
        catName = 'Anime';
    } else if (category === '24') {
        catNumber = 32;
        catName = 'Cartoons';
    }

    document.getElementById("catPage").style.display = "none";
    document.getElementById("diffPage").style.display = "block";
}

// Difficulty Selector
function diffSelector(difficulty) {
    if (difficulty === '1') {
        diffSelect = 'easy';
    } else if (difficulty === '2') {
        diffSelect = 'medium';
    } else if (difficulty === '3') {
        diffSelect = 'hard';
    } 
    document.getElementById("catPage").style.display = "none";
    document.getElementById("diffPage").style.display = "none";
    generateQuiz();
}

// Function to display score on screen
function setCounterText() {
    scoreEl.textContent = score;
}

function setfinalScore() {
    finalscoreEl.textContent = score;
    document.getElementById("quizPage").style.display = "none";
    document.getElementById("finalPage").style.display = "block";
}

errorhomeBtn.onclick = function() {
    location.reload();
}

function generateGiphyAPI() {
    var apiUrl = 'https://api.giphy.com/v1/gifs/search?q=' + catName + '&api_key=AxtreWFpTnhdH2BI9jKSi7X1Kz6ioQnM';

    fetch(apiUrl).then(function(response) {
      if (response.ok) {
        response.json().then(function(data) {
                giphyArray = data;
                generateGiphy();
        });
      }
    })

}

function generateGiphy() {
    var randomNumber = Math.floor(Math.random() * giphyArray.data.length)
    var gifImg = document.createElement('img')
    var gifUrl = giphyArray.data[randomNumber].images.original.url;

    gifImg.setAttribute('src', gifUrl)
    gifImg.classList = 'giphy'

    giphyEl.appendChild(gifImg);
}