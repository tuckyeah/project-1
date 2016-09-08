'use strict';

let app = require('../app');
let gameEvents = require('../game/events');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.log(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('#sign-in-button').hide();
  $('#sign-up-button').hide();
  $('#change-password-button').show();
  $('#sign-out').show();
  gameEvents.onCreateGame();
};

const changePasswordSuccess = () => {
  console.log('Password changed successfully.');
};

const signOutSuccess = () => {
  app.user = null;
  console.log('User signed out successfully.');
  $('#sign-in-button').show();
  $('#sign-up-button').show();
  $('#sign-out').hide();
  $('#change-password-button').hide();
};

module.exports = {
  success,
  failure,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess
};
