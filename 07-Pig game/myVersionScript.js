'use strict';

// declaring variables
const player0El = document.getElementById('score--0');
const player1El = document.getElementById('score--1');

const activePlayer0 = document.querySelector('.player--0');
const activePlayer1 = document.querySelector('.player--1');

const currentPlayer0Score = document.getElementById('current--0');
const currentPlayer1Score = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');

let currentScore = 0;
//setting score to 0 and hide the dice
player0El.textContent = 0;
player1El.textContent = 0;

diceEl.classList.add('hidden');

//Roll the dice button
btnRollEl.addEventListener('click', function () {
  //1. create random number 1-6
  let dice = Math.trunc(Math.random() * 6) + 1;

  //2. display dice roll
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  console.log(dice);

  //3. is it a 1?
  if (dice !== 1) {
    // 5. add dice to roll cuurent score
    if (activePlayer0.classList.contains('player--active')) {
      currentScore += dice;
      // 6. display score
      currentPlayer0Score.textContent = currentScore;
    } else {
      currentScore += dice;
      currentPlayer1Score.textContent = currentScore;
    }
  } else {
    //switch player
    if (activePlayer0.classList.contains('player--active')) {
      activePlayer0.classList.remove('player--active');
      activePlayer1.classList.add('player--active');
      currentScore = 0;
      currentPlayer0Score.textContent = currentScore;
    } else {
      activePlayer0.classList.add('player--active');
      activePlayer1.classList.remove('player--active');
      currentScore = 0;
      currentPlayer1Score.textContent = currentScore;
    }
  }
});

// user holds score
let scorePlayer0 = 0;
let scorePlayer1 = 0;

btnHoldEl.addEventListener('click', function () {
  console.log(currentScore);

  if (activePlayer0.classList.contains('player--active')) {
    // add current score to total score
    scorePlayer0 += currentScore;
    player0El.textContent = scorePlayer0;

    currentScore = 0;
    currentPlayer0Score.textContent = currentScore;

    activePlayer0.classList.remove('player--active');
    activePlayer1.classList.add('player--active');
  } else {
    // add current score to total score
    scorePlayer1 += currentScore;
    player1El.textContent = scorePlayer1;

    currentScore = 0;
    currentPlayer1Score.textContent = currentScore;

    activePlayer0.classList.add('player--active');
    activePlayer1.classList.remove('player--active');
  }

  // the winner
  if (scorePlayer0 >= 30) {
    console.log(`Winner! Score of player1: ${scorePlayer0}`);
  } else if (scorePlayer1 >= 30) {
    console.log(`Winner! Score of player2: ${scorePlayer1}`);
  }
});

// user resets game
btnNewEl.addEventListener('click', function () {
  currentScore = 0;
  scorePlayer0 = 0;
  scorePlayer1 = 0;

  currentPlayer0Score.textContent = currentScore;
  currentPlayer1Score.textContent = currentScore;

  player0El.textContent = scorePlayer0;
  player1El.textContent = scorePlayer1;

  diceEl.classList.add('hidden');

  // set player 1 as starting player
  activePlayer0.classList.add('player--active');
  activePlayer1.classList.remove('player--active');
});
