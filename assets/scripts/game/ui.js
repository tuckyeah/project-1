'use strict';

const updateBoard = function(board) {
  board.forEach(function(element, index) {
    $('.game-cell#'+index).text(element);
  });
};

module.exports = {
  updateBoard
};
