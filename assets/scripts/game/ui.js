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

const updateGameStatus = function() {
  let status = game.gameData.endGameStatus;
  let result;

  if (status === "draw") {
    result = "It's a draw!";
  } else {
    result = status + " is the winner!";
  }

  $('.winner h2').html('');
  $('.winner').prepend('<h2>'+result+'</h2>');
};



// on a successful creation of a new game
// set currentGame property of game object to the game from the server
// and just log some information for debugging
const createGameSuccess = (data) => {
  game.currentGame = data.game;
  game.gameData.currentTurn = 0;
  game.gameData.endGameStatus = null;
  updateGameStatus();
  $('#new-game').hide();
  $('.winner').hide();
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


const endGame = function() {
  displayMoves();
  updateGameStatus();
  $('.board-wrapper').fadeOut('slow', function() {
      $('.winner').fadeIn('slow');
  });
  game.gameData.currentTurn = 0;
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
