'use strict';

let app = require('../app');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.log(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(data);
};

module.exports = {
  success,
  failure,
  signInSuccess
};
