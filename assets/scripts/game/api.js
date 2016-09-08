'use strict';

// const game = require('./game');
const app = require('../app');

const createGame = () => {
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  });
};

module.exports = {
  createGame
};
