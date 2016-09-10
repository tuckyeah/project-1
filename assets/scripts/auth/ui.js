'use strict';

let app = require('../app');
let gameEvents = require('../game/events');

// page view functions to display / hide correct buttons based on log in state

const gameBoardView = function () {
  $('nav').css('visibility', 'visible');
  $('#sign-in-button').hide();
  $('#sign-up-button').hide();
  $('#change-password-button').show();
  $('#sign-out').show();
  $('.create-game').show();
  $('.intro-text').hide();
  $('.game-status-banner').show();
  $('.board-wrapper').show();
  $('.win-totals-bottom').show();
};

const logOutView = function () {
  $('nav').css('visibility', 'hidden');
  $('#sign-out').hide();
  $('.create-game').hide();
  $('#change-password-button').hide();
  $('.game-status-banner').hide();
  $('.board-wrapper').hide();
  $('.winner').hide();
  $('.win-totals-bottom').hide();
  $('.intro-text').show();
  $('#sign-in-button').show();
  $('#sign-up-button').show();
};

// Auth Success/Failure functions

const signUpSuccess = () => {
  $('#signUpModal').modal('hide');
  $('#sign-up-button').hide();
};

const signUpFailure = () => {
  $('.alert#sign-up-fail').show();
};

const signInSuccess = (data) => {
  app.user = data.user;
  app.user.gameCount = 0;
  $('#signInModal').modal('hide');
  gameBoardView();
  gameEvents.onCreateGame();
  gameEvents.onShowGames();
};

const signInFailure = (error) => {
  $('.alert#sign-in-fail')
    .append(`
      (Status Code
      ${error.status} : ${error.statusText})`)
    .show();
};

const changePasswordSuccess = () => {
  $('#changePassModal').modal('hide');
  $('#change-password-button').css('opacity', '0.5');
};

const changePasswordFailure = (error) => {
  $('.alert#-change-pass-fail')
    .append(`
      (Status Code
      ${error.status} : ${error.statusText})`)
    .show();
};

const signOutSuccess = () => {
  app.user = null;
  logOutView();
};

const signOutFailure = function (error) {
  let alert_text = `Status code ${error.status} : ${error.statusText}`;
  alert(alert_text);
};

module.exports = {
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  signUpSuccess,
  signInFailure,
  signUpFailure,
  changePasswordFailure,
  signOutFailure
};
