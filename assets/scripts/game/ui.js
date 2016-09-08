'use strict';

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
  updateBoard,
  updateGameStatus,
  endGame,
  resetBoard
};
