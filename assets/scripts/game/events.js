'use strict';

const ui = require('./ui');
const game = require('./game-logic');
const api = require('./api');

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

const onCreateGame = (event) => {
  event.preventDefault();
  api.createGame()
    .done(ui.createGameSuccess)
    .fail(ui.failure);
};


const addHandlers = () => {
  $('.game-cell').on('click', onCellClick);
  $('#new-game').on('click', onNewGame);
  $('.game-status-banner').on('click', onCreateGame);
};

module.exports = {
  addHandlers
};
