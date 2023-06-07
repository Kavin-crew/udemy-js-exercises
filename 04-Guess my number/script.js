'use strict';

let secretNumber = randomNumber();
let score = 20;
let highscore = 0;

function randomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displaySecretScore = function (data) {
  document.querySelector('.number').textContent =
    typeof data === 'string' ? data : Number(data);
  console.log(typeof data, data);
};
const getGuessValue = function () {
  return document.querySelector('.guess').value;
};

const setBodyBackground = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const setSecretNumWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
displayScore(score);

// CLICK CHECK EVENT BUTTON
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(getGuessValue());
  console.log(guess);
  if (score > 1) {
    if (!guess) {
      displayMessage('⛔ Please enter a valid number senior!');
    } else if (guess !== secretNumber) {
      displayMessage(
        guess > secretNumber
          ? '↗ Too high senior! Try again!'
          : '↘ Too low senior! Try again!'
      );

      score--;
      displayScore(score);
    }
    // if wins
    else if (guess === secretNumber) {
      displayMessage('✔ Nice! You got it senior!');
      displaySecretScore(secretNumber);

      // for styling
      setBodyBackground('#60b347');
      setSecretNumWidth('30rem');

      // for highscore
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
  } else if (score > 0) {
    score = 0;
    displayMessage('❌ You lose senior! Too bad!');
    displayScore(score);
    setBodyBackground('red');
  }
});

// CLICK EVENT FOR AGAIN
document.querySelector('.again').addEventListener('click', function () {
  //restore initial values of the 'score' and 'secretNumber'
  score = 20;
  secretNumber = randomNumber();

  //reset message, number, score and guess input fields
  displayScore(score);
  displaySecretScore('?');
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  // css
  setBodyBackground('#222');
  setSecretNumWidth('15rem');
});
// JavaScript in the Browser: DOM and Events

// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
// GOOD LUCK �
