'use strict';

const game = require('./game');
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

const updateGame = (index, val) => {
  return $.ajax({
    url: app.host + '/games/' + game.currentGame.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      "game": {
        "cell": {
          "index": 0,
          "value": "x"
        },
        "over": false
      }
    }
  });
};

module.exports = {
  createGame,
  updateGame
};
