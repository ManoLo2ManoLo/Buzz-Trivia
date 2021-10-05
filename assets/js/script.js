// Button Elements
const errorhomeBtn = document.getElementById('errorhomeBtn');
const submitBtn = document.getElementById('submitBtn');

// Question and Answer Elements
const questionEl = document.getElementById('question');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');

// Text Replace or Insert Texts Elements
const scoreEl = document.getElementById('scoreEl');
const finalscoreEl = document.getElementById('finalscoreEl');
const giphyEl = document.getElementById('giphyEl');
const randomFactEl = document.getElementById('randomFactEl');
const nameEl = document.getElementById('nameEl');
const highScoreListEl = document.getElementById('highScoreListEl');

// Some Variables
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
                console.log(data);
                questionArray = data;
                displayQuestion();
                generateRandomFact();
            }
        });
      }
    })
};

// Function that will Generate a quiz if the user selects the Random Quiz Button
function randomQuiz() {
    document.getElementById("catPage").style.display = "none";
    document.getElementById("diffPage").style.display = "none";
    document.getElementById("highScorePage").style.display = "none";

    var apiUrl = 'https://opentdb.com/api.php?amount=10&type=multiple';
    catName = 'Random';

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                questionArray = data;
                displayQuestion();
                generateRandomFact();
            });
        }
    })
}

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
        answer1.innerHTML = q.incorrect_answers[0];
        answer2.innerHTML = q.incorrect_answers[1];
        answer3.innerHTML = q.incorrect_answers[2];
        answer4.innerHTML = q.correct_answer;
        correctAnswer = '4';
    } else if ( questionOrder === 2) {
        answer1.innerHTML = q.incorrect_answers[0];
        answer2.innerHTML = q.incorrect_answers[1];
        answer3.innerHTML = q.correct_answer;
        answer4.innerHTML = q.incorrect_answers[2];
        correctAnswer = '3';
    } else if ( questionOrder === 3) {
        answer1.innerHTML = q.incorrect_answers[0];
        answer2.innerHTML = q.correct_answer;
        answer3.innerHTML = q.incorrect_answers[1];
        answer4.innerHTML = q.incorrect_answers[2];
        correctAnswer = '2';
    } else {
        answer1.innerHTML = q.correct_answer;
        answer2.innerHTML = q.incorrect_answers[0];
        answer3.innerHTML = q.incorrect_answers[1];
        answer4.innerHTML = q.incorrect_answers[2];
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
        playCorrectAudio();
        setCounterText();
    } else {
        playIncorrectAudio();
        questionCounter++;
    }

    if (currentQuestion < questionCounter) {
        currentQuestion++;
        displayQuestion();
    }
}

// Function that will play a sound that would indicate the user selected the correct answer
function playCorrectAudio() {
    const correctAudio = new Audio('assets/audio/correct.mp3');
    correctAudio.play();
}

// Function that will play a sound that would indicate the user selected an incorrect answer
function playIncorrectAudio() {
    const incorrectAudio = new Audio('assets/audio/incorrect.mp3');
    incorrectAudio.play();
}

// Category Selectory based on what button user clicked on main screen
function catSelector(category) {
    if (category === '1') {catNumber = 9;catName = 'General';
    } else if (category === '2') {catNumber = 10; catName = 'Books';
    } else if (category === '3') {catNumber = 11; catName = 'Film';
    } else if (category === '4') {catNumber = 12; catName = 'Music';
    } else if (category === '5') {catNumber = 13; catName = 'Theatre';
    } else if (category === '6') {catNumber = 14; catName = 'Television';
    } else if (category === '7') {catNumber = 15; catName = 'Video Games';
    } else if (category === '8') {catNumber = 16; catName = 'Board Games';
    } else if (category === '9') {catNumber = 17; catName = 'Science';
    } else if (category === '10') {catNumber = 18; catName = 'Computers';
    } else if (category === '11') {catNumber = 19; catName = 'Math';
    } else if (category === '12') {catNumber = 20; catName = 'Mythology';
    } else if (category === '13') {catNumber = 21; catName = 'Sports';
    } else if (category === '14') {catNumber = 22; catName = 'Geography';
    } else if (category === '15') {catNumber = 23; catName = 'History';
    } else if (category === '16') {catNumber = 24; catName = 'Politics';
    } else if (category === '17') {catNumber = 25; catName = 'Art';
    } else if (category === '18') {catNumber = 26; catName = 'Celebrities';
    } else if (category === '19') {catNumber = 27; catName = 'Animals';
    } else if (category === '20') {catNumber = 28; catName = 'Vehicles';
    } else if (category === '21') {catNumber = 29; catName = 'Comic Books';
    } else if (category === '22') {catNumber = 30; catName = 'Gadgets';
    } else if (category === '23') {catNumber = 31; catName = 'Anime';
    } else {catNumber = 32; catName = 'Cartoons';}

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

// Function to display final score on final score page
function setfinalScore() {
    finalscoreEl.textContent = score;
    document.getElementById("quizPage").style.display = "none";
    document.getElementById("finalPage").style.display = "block";
}

errorhomeBtn.onclick = function() {
    location.reload();
}

// Function to generate a gif api related to the category selected
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

// Prints the gif from the gif api on the question screen
function generateGiphy() {
    var randomNumber = Math.floor(Math.random() * giphyArray.data.length)
    var gifImg = document.createElement('img')
    var gifUrl = giphyArray.data[randomNumber].images.original.url;

    gifImg.setAttribute('src', gifUrl)
    gifImg.classList = 'giphy'

    giphyEl.appendChild(gifImg);
}

// Generates a random fact and displays it on the final score page
function generateRandomFact() {
    var apiUrl = 'https://asli-fun-fact-api.herokuapp.com/';
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
          response.json().then(function(data) {
                randomFactEl.innerHTML = 'Fun Fact: ' + data.data.fact
          });
        }
    })
}

// Submits user name into local storage when they click the button
submitBtn.onclick = function() {
    const name = nameEl.value 
    let finalscore = ''
    
    if (name) {
        if (catName === 'Random') {
            finalscore = ' got a ' + finalscoreEl.textContent + ' out of 100 on ' + catName + '.';
        } else {
            finalscore = ' got a ' + finalscoreEl.textContent + ' out of 100 on ' + catName + ' on ' + diffSelect + '.';
        }
        localStorage.setItem(name, finalscore);
        highScoreList();
    }
}

// Creates the high score list on the webpage
function highScoreList() {
    $('#highScoreListEl').children().remove();
    document.getElementById("catPage").style.display = "none";
    document.getElementById("diffPage").style.display = "none";
    document.getElementById("errorPage").style.display = "none";
    document.getElementById("finalPage").style.display = "none";
    document.getElementById("quizPage").style.display = "none";
    document.getElementById("highScorePage").style.display = "block";

    for(let j=0; j < localStorage.length; j++) {
        const key = localStorage.key(j)
        const value = localStorage.getItem(key)

        var hsOutput = document.createElement('p');
        hsOutput.innerHTML += `${key} ${value} <br>`;
        
        highScoreListEl.appendChild(hsOutput);
        console.log(hsOutput)
    }
}

// function to clear local storage
$('#clearBtn').on("click", function() {
    localStorage.clear();
    highScoreList();
});

// function to go back to main page
$('#homeBtn').on("click", function() {
    location.reload();
});