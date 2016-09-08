'use strict';

let ui = require('./ui');
let game = require('./game');

// set game.player based on current turn - if 0 or even, 'x', odds 'o'
const setPlayer = function() {
  let player = game.game.player;
  let currentTurn = game.game.currentTurn;

  if (currentTurn % 2 === 0 || currentTurn === 0) {
    player = 'X';
  } else {
    player = 'O';
  }
  console.log(player);
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

//used for debugging
const returnCurrentGame = function() {
  console.log(game.currentGame);
  console.log(validateMove());
};

module.exports = {
  returnCurrentGame,
  validateMove,
  setPlayer
};
