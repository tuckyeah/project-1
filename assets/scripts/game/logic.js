'use strict';

let game = require('./game');
let ui = require('./ui');

// set game.player based on current turn - if 0 or even, 'x', odds 'o'
const setPlayer = function() {
  let player;
  let currentTurn = game.gameData.currentTurn;

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
  game.gameData.currentTurn++;
  console.log(game.gameData.currentTurn);
};

// returns an array of the player's locations
const getPlayerMoves = function(player, board) {

  let res = [];

  for (let i = 0; i < board.length; i++) {
    if (board[i] === player) {
      res.push(i);
    }
  }
  return res;
};

//compare two arrays, and return true if every value of the second array
// is contained within the first.
const compareArrays = function(winningCombo, playerMoves) {

  let res = winningCombo.every(function(val) {
     return playerMoves.indexOf(val) >= 0;
  });

  return res;
};

// returns true if the player has succeeded in making a
// winning move.
const isWinner = function(player, board) {
  let winners = game.gameData.winningCombos;
  let playerMoves;

  if (!board) {
    playerMoves = getPlayerMoves(player, game.currentGame.cells);
  } else {
    playerMoves = getPlayerMoves(player, board);
  }

  if (playerMoves.length >= 3)  {
    for (let i=0; i < winners.length; i++) {
      if(compareArrays(winners[i], playerMoves)) {
        return true;
      }
    }
  }
  // I don't know if I need this statement:
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
    game.gameData.endGameStatus = player;
    game.currentGame.over = true;
    return true;
  } else if (isDraw()) {
    game.gameData.endGameStatus = 'draw';
    game.currentGame.over = true;
    return true;
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
      if(isGameOver(player)){
        ui.endGame();
      }
      return true;
    } else {
      console.log("play move Error!");
      return false;
    }
};

const getWinners = () => {
  let xWins = 0;
  let oWins = 0;

  game.allGames.forEach(function(elem) {
    if (isWinner('X', elem.cells)) {
      xWins++;
    } else {
      oWins++;
    }
  });

  game.wins = {
    'X':xWins,
    'O':oWins
  };
};

const getAllGames = (data) => {
  game.allGames = data.games;
  getWinners();
  ui.displayWinTotals();
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
  getPlayerMoves,
  isGameOver,
  getAllGames
};
