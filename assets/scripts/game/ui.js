'use strict';

const updateBoard = function(board) {
  board.forEach(function(element, index) {
    $('.game-cell#'+index).html('<p>'+element+'</p>');
  });
};

module.exports = {
  updateBoard
};
