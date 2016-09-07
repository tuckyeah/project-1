'use strict';

let board = ['','','','','','','','',''];
let currentTurn = 0;

// Functions in this file:
//
// getCurrentBoard(board, player) - returns an array of the indices for either 'x' or 'o'
// setPlayer(currentTurn) - sets player to 'x' or 'o'
// checkWin(currentBoard) - takes the result of getCurrentBoard, checks it against winning combinations
//    returns true if match, false if no match
// countEmpties(board) - takes board and counts how many empty string spaces it has
// isWinner(board, player) - determines if there is a draw or a winner and returns true/false
// playMove(board, moveIndex, player) - updates the board with that player's move,
//    doesn't do anything if there's already something there. Then runs isWinner
// ticTacToe(board, moveIndex) - sets the player based on current turn, then runs playMove
//    and increments the currentTurn

//returns an array of the indices for either 'x' or 'o'
const getCurrentBoard = function(board, player) {

  let res = [];

  // sort through board and collect the index of each 'x'
  // add that to res
  for (let i = 0; i < board.length; i++) {
    if (board[i] === player) {
      res.push(i);
    }
  }

  //return array of indices
  return res;
};

//sets 'x' or 'o' based on current turn (x if even)
const setPlayer = function(currentTurn) {
  let player;

  if (currentTurn % 2 !== 0 || currentTurn === 0) {
    player = 'x';
  } else {
    player = 'o';
  }

  return player;
};

//checks current indices of 'x' against an array of winning combinations
// of indices
const checkWin = function(currentBoard) {

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // sort through winningCombos and if the array of indices
  // matches any winningCombo, print 'winner' and return.
  //otherwise, print 'loser :(' and
  for (let i = 0; i < winningCombos.length; i++) {
    if (String(winningCombos[i]) === String(currentBoard)) {
      console.log("Winner!");
      return true;
    }
  }
  return false;
};

// counts number of empty string spaces in the board and returns that number
const countEmpties = function(board) {
  let emptySpaces = 0;
  board.forEach(function(element) {
    if (element === '') {
      emptySpaces++;
    }
  });
  return emptySpaces;
};

// checks if there is a draw by running countEmpties
// otherwise, checks if the current player is a winner, and returns the result of checkWin
const isWinner = function(board, player) {
  let layout = getCurrentBoard(board, player);

  let empties = countEmpties(board);

  if (empties === 0) {
    console.log("Draw!");
    return true;
  } else {
    return checkWin(layout);
  }
};

//play a move only if the spot is empty
const playMove = function(board, moveIndex, player) {

  //updates board with move player (x or o, based on what ticTacToe says)
  if (board[moveIndex] === '') {
    board[moveIndex] = player;
  } else {
    console.log("that spot is taken!");
    return;
  }
  return isWinner(board, player);
};

// this will be our 'game' function that serves as the 'engine'
// as of right now, we have to manually enter the board and the move index
// since i can't figure out how to do that in node -
// but once we move to a UI setting it'll be a little better
const ticTacToe = function(board, moveIndex) {

  let player = setPlayer(currentTurn);

  playMove(board, moveIndex, player);
  currentTurn++;

  //debugging stuff
  console.log(board);
  console.log("Current turn: " + currentTurn);

};

//HELPER FUNCTION FOR DEBUGGING
const printBoard = function(board) {
  console.log(board);

  let xCount = 0;
  let xIndices = [];
  let oCount = 0;
  let oIndices = [];

  // count x's & o's
  board.forEach(function(element, index) {
    if (element === 'x') {
      xCount++;
      xIndices.push(index);
    } else if(element === 'o') {
      oCount++;
      oIndices.push(index);
    }
  });

  console.log("Number of x's: " + xCount);
  console.log("X's located at: " + xIndices);
  console.log("Number of o's: " + oCount);
  console.log("O's located at: " + oIndices);
};


module.export = {
  ticTacToe,
  isWinner,
  board,
  playMove,
  checkWin,
  setPlayer,
  getCurrentBoard,
  printBoard
};