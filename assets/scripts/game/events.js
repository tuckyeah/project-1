'use strict';

const ui = require('./ui');
// const logic = require('./game-logic');
const api = require('./api');
const gameLogic = require('./logic');
const game = require('./game');

// we need a function that will update the board

const onCellClick = (event) => {
  event.preventDefault();

  // get the index of the clicked cell
  let currentIndex = $('.game-cell').index(event.target);
  let player = gameLogic.setPlayer();

  if (gameLogic.playMove(currentIndex, player)) {
      api.updateGame(currentIndex, player)
        .done(ui.updateGameSuccess)
        .fail(ui.failure);
  } else {
    console.log("onCellClick error!");
  }
  if (game.currentGame.over) {
    ui.endGame(player);
  }
};

const onCreateGame = () => {
  event.preventDefault();
  api.createGame()
    .done(ui.createGameSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('.game-cell').on('click', onCellClick);
  $('.create-game').on('click', onCreateGame);
};

module.exports = {
  addHandlers,
  onCreateGame
};
