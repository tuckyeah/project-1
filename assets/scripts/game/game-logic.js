'use strict';

const board = ['','','','','','','','',''];

const playMove = function(board, moveIndex) {

  //updates board with move ('x')
  board[moveIndex] = 'x';

};

//check board for winners

const getCurrentBoard = function(board) {

  let res = [];

  // sort through board and collect the index of each 'x'
  // add that to res
  for (let i = 0; i < board.length; i++) {
    if (board[i] === 'x') {
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
      return;
    }
  }
  console.log("loser :(");
};


module.export = {
  playMove,
  checkWin,
};
