'use strict';

// declaring variables
// accumulated score / total score
const player0El = document.getElementById('score--0');
const player1El = document.getElementById('score--1');

//section player
const activePlayer0El = document.querySelector('.player--0');
const activePlayer1El = document.querySelector('.player--1');

// current score
const currentPlayer0ScoreEl = document.getElementById('current--0');
const currentPlayer1ScoreEl = document.getElementById('current--1');

// primary buttons
const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');

const diceEl = document.querySelector('.dice');

// initialize the values
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let isPlaying = true;
player0El.textContent = 0;
player1El.textContent = 0;
diceEl.classList.add('hidden');

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;

  activePlayer = activePlayer === 0 ? 1 : 0;
  activePlayer0El.classList.toggle('player--active');
  activePlayer1El.classList.toggle('player--active');
};

//Rolling the dice
btnRollEl.addEventListener('click', function () {
  if (isPlaying) {
    //1. create random number 1-6
    let dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // if dice falls to 2-6
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
    // if dice falls to 1
    else {
      switchPlayer();
    }
  }
});

btnHoldEl.addEventListener('click', function () {
  if (isPlaying) {
    // 1. add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // 2. check if score is >= 100
    console.log(scores[0], scores[1]);
    if (scores[activePlayer] >= 30) {
      // finish the game
      isPlaying = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      //switch player{}
      switchPlayer();
    }
  }
});

btnNewEl.addEventListener('click', function () {
  // 1. reset variables and set all scores to 0
  isPlaying = true;
  currentScore = 0;
  activePlayer = 0;

  diceEl.classList.add('hidden');

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');

  // 2. set player 1 as staring player
  activePlayer0El.classList.add('player--active');
  activePlayer1El.classList.remove('player--active');

  for (let i = 0; i < scores.length; i++) {
    // scores[0] = 0;
    // scores[1] = 0;
    // reset text contents
    scores[i] = 0;
    document.getElementById(`score--${i}`).textContent = 0;
    document.getElementById(`current--${i}`).textContent = 0;
    console.log(scores[0], scores[1]);
  }
});
