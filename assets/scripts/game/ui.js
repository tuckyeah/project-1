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
  game.game.currentTurn = 0;
  game.game.endGameStatus = null;
  updateGameStatus();
  $('#new-game').hide();
  $('.board-wrapper').show();
  $('.game-cell p').text('');
  console.log("New game successfully created.");
  console.log(game.currentGame);
  console.log(game);
};

const displayMoves = function() {
  // update UI board on client side
  let board = game.currentGame.cells;

  board.forEach(function(token, index) {
    $('.game-cell#'+index).html('<p>'+token+'</p>');
  });
};

const updateGameSuccess = function() {
  console.log(game);
  displayMoves();
};

const updateGameStatus = function() {
  let status = game.game.endGameStatus;
  let result;

  if (status === "draw") {
    result = "It's a draw!";
  } else if (status === null) {
    console.log("I ran");
    result = "Let's play!";
  } else {
    result = status + " is the winner!";
  }

  $('.game-status-banner h3').text('');
  $('.game-status-banner h3').text(result);
};

const endGame = function(player) {
  $('.board-wrapper').hide();
  game.currentGame = null;
  game.game.currentTurn = 0;

  updateGameStatus();
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
