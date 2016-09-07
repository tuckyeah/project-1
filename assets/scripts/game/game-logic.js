'use strict';

let board = ['','','','','','','','',''];
let currentTurn = 0;

// player plays a move

//play a move
const playMove = function(board, moveIndex, currentTurn) {
  let player;

  //sets 'x' or 'o' based on current turn (x if even)
  if (currentTurn % 2 !== 0) {
    player = 'x';
  } else {
    player = 'o';
  }

  //updates board with move player (x or o, based on what ticTacToe says)
  if (board[moveIndex] === '') {
    board[moveIndex] = player;
  } else {
    console.log("that spot is taken!");
    // this should do something - like ask the user to make another move
    // or just do nothing at all
  }

  isWinner(board, player);
};

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
  console.log("loser :(");
  return false;
};

const isWinner = function(board, player) {
  let layout = getCurrentBoard(board, player);
  return checkWin(layout);
};

// this will be our 'game' function that will house pretty much everything else

const ticTacToe = function(board, moveIndex) {
  playMove(board, moveIndex, currentTurn);
  currentTurn++;
};


module.export = {
  ticTacToe
};
