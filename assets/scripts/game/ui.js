'use strict';

// let app = require('../app');
let game = require('../game/game');


const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const createGameSuccess = (data) => {
  game.currentGame = data.game;
  debugger;
};

const updateBoard = function(board) {
  board.forEach(function(element, index) {
    $('.game-cell#'+index).html('<p>'+element+'</p>');
  });
};

const updateGameStatus = function(result) {
  $('.game-status-banner').html('');
  $('.game-status-banner').html('<h2>'+result+'</h2>');
};

const endGame = function() {
  $('.board-wrapper').hide();
  // $('.game-cell').css('visibility','hidden');
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
  updateBoard,
  updateGameStatus,
  endGame,
  resetBoard,
  createGameSuccess
};
