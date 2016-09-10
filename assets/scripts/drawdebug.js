'use strict';

let drawBoard = ["X", "O", "X", "X", "X", "O", "O", "X", "O"];
let xWin = ["X", "X", "X", "", "O", "O", "", "", ""];
let oWin = ["O", "O", "O", "", "X", "X", "", "", ""];

let manyBoards = [drawBoard, xWin, oWin];

const getPlayerMoves = function (player, board) {

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
const compareArrays = function (winningCombo, playerMoves) {

  let res = winningCombo.every(function (val) {
    return playerMoves.indexOf(val) >= 0;
  });

  return res;
};

// returns true if the player has succeeded in making a
// winning move.
const isWinner = function (player, board) {
  // let winners = game.gameData.winningCombos;
  let winners = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

  let playerMoves = getPlayerMoves(player, board);

  if (playerMoves.length >= 3)  {
    for (let i = 0; i < winners.length; i++) {
      if (compareArrays(winners[i], playerMoves)) {
        return true;
      } else {
        return false;
      }
    }
  }
};

module.exports = {
  isWinner,
  manyBoards
};
