'use strict';

// let ui = require('./ui');
let game = require('./game');

// set game.player based on current turn - if 0 or even, 'x', odds 'o'
const setPlayer = function() {
  let player;
  let currentTurn = game.game.currentTurn;

  if (currentTurn % 2 === 0 || currentTurn === 0) {
    player = 'X';
  } else {
    player = 'O';
  }
  return player;
};

//validates that the move goes into an empty space
// TODO: if it does, increment current turn
// and call an updateboard function that will update the api
// and the board?

const validateMove = function(index) {
  let currentGameBoard = game.currentGame.cells;

  if (currentGameBoard[index] === '') {
    console.log("Successful move");
    return true;
  } else {
    console.log("Invalid move");
    return false;
  }
};

// increment turn by one
const incrementTurn = function() {
  game.game.currentTurn++;
  console.log(game.game.currentTurn);
};

// calls validate move, and if it's a valid move, updates the board
// in memory and increments turn
const playMove = function(index, player) {

  if (validateMove(index)) {
    let currentGameBoard = game.currentGame.cells;

    // sets currentGame board to show the move by the player
    currentGameBoard[index] = player;

    //set store index in game object

    // increment turn
    incrementTurn();

    return true;

  } else {
    console.log("play move Error!");
    return false;
  }
  // check for winner or draw
};



//used for debugging
const returnCurrentGame = function() {
  console.log(game.currentGame);
  console.log(validateMove());
};

module.exports = {
  returnCurrentGame,
  validateMove,
  setPlayer,
  playMove,
  incrementTurn
};
