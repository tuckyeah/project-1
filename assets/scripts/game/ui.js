'use strict';

let game = require('./game');
let app = require('../app');

const failure = (error) => {
  let alertText = `Status Code ${error.status} : ${error.statusText}`;
  $('#error-message')
    .append(alertText)
    .show();
};

const displayWinTotals = function () {
  $('.x-wins').text('X: ' + game.wins.X);
  $('.o-wins').text('O: ' + game.wins.O);
  $('.draw-count').text('Draws: ' + game.wins.draw);
};

const incrementWinDisplay = function (player) {
  game.wins[player] += 1;
  displayWinTotals(game.wins[player]);
};

const updateGameStatus = function () {
  let status = game.gameData.endGameStatus;
  let result;

  if (status === 'draw') {
    result = 'It\'s a draw!';
  } else {
    result = status + ' is the winner!';
  }

  incrementWinDisplay(status);
  $('.winner-text')
    .html('')
    .prepend('<h2>' + result + '</h2>');
};

const turnIndicator = function (player) {
  if (player === 'X') {
    $('#x-indicator').removeClass('highlighted-color');
    $('#o-indicator').addClass('highlighted-color');
  } else if (player === 'O') {
    $('#o-indicator').removeClass('highlighted-color');
    $('#x-indicator').addClass('highlighted-color');
  }
};

// on a successful creation of a new game
// set currentGame property of game object to the game from the server
// and just log some information for debugging
const createGameSuccess = function (data) {
  game.currentGame = data.game;
  game.gameData.currentTurn = 0;
  game.gameData.endGameStatus = null;
  app.user.gameCount++;
  $('.turn-indicator').css('visibility', 'visible');
  $('#o-indicator').removeClass('highlighted-color');
  $('#x-indicator').addClass('highlighted-color');

  if (app.user.gameCount > 1) {  updateGameStatus(); }

  $('#new-game').hide();
  $('.winner').hide();
  $('.board-wrapper').show();
  $('.game-cell p').text('');
};

const displayMoves = function () {

  $('#wrong-move').hide();

  // update UI board on client side
  let board = game.currentGame.cells;

  board.forEach(function (token, index) {
    $('.game-cell#' + index).html('<p>' + token + '</p>');
  });
};

// this is called in events when a game successfully updates
// I can probably get rid of this since all it does is call one function
// but it helps with readabilty (for me anyway)
const updateGameSuccess = function () {
  displayMoves();
};

const endGame = function () {
  displayMoves();
  updateGameStatus();
  $('.turn-indicator').css('visibility', 'hidden');
  $('.board-wrapper').fadeOut('slow', function () {
    $('.winner').fadeIn('slow');
  });
  game.gameData.currentTurn = 0;
};

const resetBoard = function () {
  $('#new-game').hide();
  $('.board-wrapper').show();
  $('.game-status-banner').html('<h3>Let\'s play!</h3>');
  $('.game-cell p').text('');
};

const invalidMove = function () {
  $('#wrong-move').show();
};

module.exports = {
  failure,
  displayMoves,
  endGame,
  resetBoard,
  createGameSuccess,
  updateGameSuccess,
  displayWinTotals,
  turnIndicator,
  invalidMove,
};
