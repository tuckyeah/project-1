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

const updateGame = (index, val, over) => {
  return $.ajax({
    url: app.host + '/games/' + game.currentGame.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      "game": {
        "cell": {
          "index": index,
          "value": val
        },
        "over": over
      }
    }
  });
};

const showGames = () => {
  return $.ajax({
    url: app.host + '/games/?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  });
};

module.exports = {
  createGame,
  updateGame,
  showGames
};
