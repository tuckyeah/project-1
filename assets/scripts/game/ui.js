'use strict';

const updateBoard = function(board) {
  board.forEach(function(element, index) {
    $('.game-cell#'+index).html('<p>'+element+'</p>');
  });
};

const updateGameStatus = function(result) {
  $('.game-status-banner').html('');
  $('.game-status-banner').html('<h3>'+result+'</h3>');
};

const endGame = function() {
  // $('.board-wrapper').hide();
  $('.game-cell').css('visibility','hidden');
  $('#new-game').show();
};

// clear board function / start new game

module.exports = {
  updateBoard,
  updateGameStatus,
  endGame
};
