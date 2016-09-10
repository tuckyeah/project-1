'use strict';

let game = require('./game');
let app = require('../app');

//generic success/failure functions
const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const displayWinTotals = function () {
  $('.xWins').text('X: ' + game.wins.X);
  $('.oWins').text('O: ' + game.wins.O);
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
  $('.winner h3').html('');
  $('.winner').prepend('<h3>' + result + '</h3>');
};

const turnIndicator = function (player) {
  console.log(player);
  if (player === 'X') {
    $('#x-indicator').removeClass('highlighted-color');
    $('#o-indicator').addClass('highlighted-color');
  } else if (player === 'O') {
    $('#o-indicator').removeClass('highlighted-color');
    $('#x-indicator').addClass('highlighted-color');
  } else {
    console.log('error');
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

  console.log('Played games: ' + app.user.gameCount);

  if (app.user.gameCount > 1) {  updateGameStatus(); }

  // displayWinTotals();
  $('#new-game').hide();
  $('.winner').hide();
  $('.board-wrapper').show();
  $('.game-cell p').text('');
  console.log('New game successfully created.');
  console.log(game.currentGame);
  console.log(game);
};

const displayMoves = function () {

  // update UI board on client side
  let board = game.currentGame.cells;

  board.forEach(function (token, index) {
    $('.game-cell#' + index).html('<p>' + token + '</p>');
  });
};

const updateGameSuccess = function () {
  console.log(game);
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

module.exports = {
  success,
  failure,
  displayMoves,
  endGame,
  resetBoard,
  createGameSuccess,
  updateGameSuccess,
  displayWinTotals,
  turnIndicator,
};
