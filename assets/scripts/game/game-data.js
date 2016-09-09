'use strict';

// const api = ('./api');
// const ui = ('./ui');
const logic = ('./logic');

const getWins = function() {
  let res = logic.isWinner('x');
  return res;
};

module.exports = {
  getWins
};
