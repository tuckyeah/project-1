'use strict';

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
// returns an array of the player's locations
const getPlayerMoves = function(player) {
  let board = game.currentGame.cells;
  let res = [];

  for (let i = 0; i < board.length; i++) {
    if (board[i] === player) {
      res.push(i);
    }
  }
  return res;
};

//compare two arrays, and return true if every value of the second array
// is contained within the first
const compareArrays = function(winningCombo, playerMoves) {

  let res = winningCombo.every(function(val) {
     return playerMoves.indexOf(val) >= 0;
  });

  return res;
};

// returns true if the player has succeeded in making a
// winning move.
const isWinner = function(player) {
  let winners = game.game.winningCombos;
  let playerMoves = getPlayerMoves(player);

  if (playerMoves.length >= 3)  {
    for (let i=0; i < winners.length; i++) {
      if(compareArrays(winners[i], playerMoves)) {
        return true;
      }
    }
  }
  // I don't know if I need this
  // return false;
};

// returns true if there are no empty spaces on the board
const isDraw = function() {
  let emptySpaces = true;
  let board = game.currentGame.cells;

  board.forEach(function(element) {
    if (element === '') {
      emptySpaces = false;
    }
  });

  return emptySpaces;
};

// sets the currentGame.over property to true if it works
const isGameOver = function(player) {
  if(isWinner(player)) {
    game.currentGame.over = true;
  } else if (isDraw()) {
    console.log("It's a draw!");
    game.currentGame.over = true;
  } else {
    return false;
  }
};

// calls validate move, and if it's a valid move, updates the board
// in memory and increments turn
const playMove = function(index, player) {

    if (validateMove(index)) {
      let currentGameBoard = game.currentGame.cells;
      currentGameBoard[index] = player; // updates board in memory with user move
      incrementTurn();     // increment turn
      isGameOver(player);
      return true;
    } else {
      console.log("play move Error!");
      return false;
    }

};

// successful turn function

const takeATurn = function(index, player) {

  if(game.currentGame.over) {
    console.log("Game over!");
    return false;
  } else {
    playMove(index, player);
    return true;
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
  setPlayer,
  playMove,
  incrementTurn,
  getPlayerMoves
};
