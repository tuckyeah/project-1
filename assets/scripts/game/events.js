'use strict';

const ui = require('./ui');
const api = require('./api');
const logic = require('./logic');
const game = require('./game');

// we need a function that will update the board

const onCellClick = (event) => {
  event.preventDefault();

  // get the index of the clicked cell
  let currentIndex = $('.game-cell').index(event.target);
  let player = logic.setPlayer();

  if (logic.playMove(currentIndex, player)) {
    let val = game.currentGame.over;
    ui.turnIndicator(player);
    api.updateGame(currentIndex, player, val)
      .done(ui.updateGameSuccess)
      .fail(ui.failure);
  } else {
    ui.invalidMove();
    // console.log('onCellClick error!');
  }
};

const onCreateGame = () => {
  event.preventDefault();
  api.createGame()
  .done(ui.createGameSuccess)
  .fail(ui.failure);
};

const onShowGames = () => {
  event.preventDefault();
  api.showGames()
  .done(logic.getAllGames)
  .fail(ui.failure);
};

const addHandlers = () => {
  $('.game-cell').on('click', onCellClick);
  $('.create-game').on('click', onCreateGame);
  $('.main-header').on('click', onShowGames);
};

module.exports = {
  addHandlers,
  onCreateGame,
  onShowGames,
};
