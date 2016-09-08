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
  $('#sign-in').hide();
  $('#sign-up').hide();
  $('#change-password').show();
  $('#sign-out').show();
};

const changePasswordSuccess = () => {
  console.log('Password changed successfully.');
};

const signOutSuccess = () => {
  app.user = null;
  console.log('User signed out successfully.');
  $('#sign-in').show();
  $('#sign-up').show();
  $('#sign-out').hide();
  $('#change-password').hide();
};

module.exports = {
  success,
  failure,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess
};
