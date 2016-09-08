'use strict';

// let app = require('../app');
let game = require('../game/game');

//generic success/failure functions
const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

// on a successful creation of a new game
// set currentGame property of game object to the game from the server
// and just log some information for debugging
const createGameSuccess = (data) => {
  game.currentGame = data.game;
  console.log("New game successfully created.");
  console.log(game.currentGame);
};

const displayMoves = function() {
  // update UI board on client side
  let board = game.currentGame.cells;

  board.forEach(function(token, index) {
    $('.game-cell#'+index).html('<p>'+token+'</p>');
  });
};

const updateGameSuccess = function(data) {
  console.log(data);
  displayMoves();
};

const updateGameStatus = function(result) {
  $('.game-status-banner').html('');
  $('.game-status-banner').html('<h2>'+result+'</h2>');
};

const endGame = function() {
  $('.board-wrapper').hide();
  // $('.game-cell').css('visibility','hidden');
  game.currentGame = null;
  $('#new-game').show();
};

const resetBoard = function() {
  $('#new-game').hide();
  $('.board-wrapper').show();
  $('.game-status-banner').html("<h3>Let's play!</h3>");
  $('.game-cell p').text('');
};
// clear board function / start new game

module.exports = {
  success,
  failure,
  displayMoves,
  updateGameStatus,
  endGame,
  resetBoard,
  createGameSuccess,
  updateGameSuccess
};
