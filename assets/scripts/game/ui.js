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

module.exports = {
  updateBoard,
  updateGameStatus
};
