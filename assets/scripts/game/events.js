'use strict';

const onCellClick = () => {
    // click on a cell, log the index of said cell

    // go to the parent, count the index of this child?
    // collect array of all game-cells?

    // this is all the game-cells in board-wrapper
    let currentIndex = $('.game-cell').index(this);
    console.log(currentIndex);
};


const addHandlers = () => {
  $('.game-cell').on('click', onCellClick);
};

module.exports = {
  addHandlers
};
