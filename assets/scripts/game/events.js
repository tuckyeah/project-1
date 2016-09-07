'use strict';

const ui = require('./ui');
const game = require('./game-logic');

// we need a function that will update the board

const onCellClick = (event) => {
  event.preventDefault();

  // get the index of the current cell
  let currentIndex = $('.game-cell').index(event.target);

  //populate the gameboard
  let board = game.getBoard();

  game.ticTacToe(board, currentIndex);
  ui.updateBoard(board);
};

const onNewGame = (event) => {
  event.preventDefault();
  ui.resetBoard();
};


const addHandlers = () => {
  $('.game-cell').on('click', onCellClick);
  $('#new-game').on('click', onNewGame);
};

module.exports = {
  addHandlers
};
