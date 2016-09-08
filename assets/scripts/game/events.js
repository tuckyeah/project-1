'use strict';

const ui = require('./ui');
const logic = require('./game-logic');
const api = require('./api');
const gameLogic = require('./logic');

// we need a function that will update the board

const onCellClick = (event) => {
  event.preventDefault();

  // get the index of the current cell
  let currentIndex = $('.game-cell').index(event.target);
  let player = gameLogic.setPlayer();


  if (gameLogic.validateMove(currentIndex)) {
    gameLogic.playMove(currentIndex, player);
  } else {
    console.log("error!");
  }


  // //populate the gameboard
  // let board = logic.getBoard();
  //
  // logic.ticTacToe(board, currentIndex);
  // ui.updateBoard(board);
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
  $('#create-game').on('click', onCreateGame);
};

module.exports = {
  addHandlers
};
