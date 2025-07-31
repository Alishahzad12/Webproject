
// "use strict";
// // 1. Catch the id of the player score and set them to zero.
// const score0EL = document.querySelector("#score--0");
// const score1EL = document.querySelector("#score--1");
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const btnHold = document.querySelector('.btn--hold');
// const btnRoll = document.querySelector(".btn--roll");
// const btnNew=document.querySelector(".btn--new")
// // 2. Set initial scores to 0
// score0EL.textContent = 0;
// score1EL.textContent = 0;

// // 3. Taking global variables
// let currentScore = 0;
// let activePlayer = 0;
// let scores = [0, 0];
// let playing = true;

// // 4. Select and hide the dice element initially
// const diceEL = document.querySelector(".dice");
// diceEL.classList.add("hidden");

// // 5. Attach event listener to the roll button
// btnRoll.addEventListener("click", function () {
//     if (playing) {
//         // 6. Generate a random dice roll
//         const dice = Math.trunc(Math.random() * 6) + 1;

//         // Show the dice and display the correct image
//         diceEL.classList.remove("hidden");
//         diceEL.src = `dice-${dice}.jpg`;

//         // Check if dice roll is not 1
//         if (dice !== 1) {
//             currentScore += dice;
//             document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
//         } else {
//             // Switch to next player
//             document.querySelector(`#current--${activePlayer}`).textContent = 0;
//             currentScore = 0;
//             activePlayer = activePlayer === 0 ? 1 : 0;
//             player0El.classList.toggle('player--active');
//             player1El.classList.toggle('player--active');
//         }
//     }
// });

// // Hold button functionality
// btnHold.addEventListener('click', function () {
//     if (playing) {
//         // Add current score to global score of active player
//         scores[activePlayer] += currentScore;
//         document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

//         // Check if the player won the game
//         if (scores[activePlayer] >= 20) {
//             document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
//             playing = false;
//             diceEL.classList.add("hidden"); // Hide the dice after win
//         } else {
//             // Switch to the next player
//             currentScore = 0;
//             activePlayer = activePlayer === 0 ? 1 : 0;
//             player0El.classList.toggle('player--active');
//             player1El.classList.toggle('player--active');
//         }
//     }
// });
// btnNew.addEventListener('click',function(){
//     score0EL.textContent = 0;
// score1EL.textContent = 0;
// current0EL.textContent = 0;
// current1EL.textContent = 0;
// currentScore = 0;
//  activePlayer = 0;
// scores = [0, 0];
// playing = true;
// player0El.classList.add('player--active');
// player0El.classList.remove('player--winner');
// player1El.classList.remove('player--winner');
// diceEL.classList.remove('hidden')
// })


"use strict"; 

// 1. Catch the id of the player score and set them to zero.
const score0EL = document.querySelector("#score--0");
const score1EL = document.querySelector("#score--1");
const current0EL = document.querySelector("#current--0"); // Define current scores
const current1EL = document.querySelector("#current--1");
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");

// 2. Set initial scores to 0
score0EL.textContent = 0;
score1EL.textContent = 0;

// 3. Taking global variables
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let playing = true;

// 4. Select and hide the dice element initially
const diceEL = document.querySelector(".dice");
diceEL.classList.add("hidden");

// 5. Attach event listener to the roll button
btnRoll.addEventListener("click", function () {
    if (playing) {
        // 6. Generate a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // Show the dice and display the correct image
        diceEL.classList.remove("hidden");
        diceEL.src = `dice-${dice}.jpg`;

        // Check if dice roll is not 1
        if (dice !== 1) {
            currentScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        } else {
            // Switch to next player
            document.querySelector(`#current--${activePlayer}`).textContent = 0;
            currentScore = 0;
            activePlayer = activePlayer === 0 ? 1 : 0;
            player0El.classList.toggle('player--active');
            player1El.classList.toggle('player--active');
        }
    }
});

// Hold button functionality
btnHold.addEventListener('click', function () {
    if (playing) {
        // Add current score to global score of active player
        scores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

        // Check if the player won the game
        if (scores[activePlayer] >= 20) {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            playing = false;
            diceEL.classList.add("hidden"); // Hide the dice after win
        } else {
            // Switch to the next player
            document.querySelector(`#current--${activePlayer}`).textContent = 0;
            currentScore = 0;
            activePlayer = activePlayer === 0 ? 1 : 0;
            player0El.classList.toggle('player--active');
            player1El.classList.toggle('player--active');
        }
    }
});

// New Game button functionality
btnNew.addEventListener('click', function () {
    score0EL.textContent = 0;
    score1EL.textContent = 0;
    current0EL.textContent = 0;
    current1EL.textContent = 0;
    currentScore = 0;
    activePlayer = 0;
    scores = [0, 0];
    playing = true;
    
    // Reset classes
    player0El.classList.add('player--active');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    diceEL.classList.remove("hidden"); // Hide the dice again
});
