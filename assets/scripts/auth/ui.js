'use strict';

let app = require('../app');
let gameEvents = require('../game/events');

// DON'T FORGET TO REMOVE THESE

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.log(error);
};

// page view functions

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
  $('#sign-up-button').hide();
};

const signInSuccess = (data) => {
  app.user = data.user;
  app.user.gameCount = 0;
  $('#signInModal').modal('hide');
  gameBoardView();
  gameEvents.onCreateGame();
  gameEvents.onShowGames();
};

const signInFailure = () => {
  $('.alert').show();
};

const changePasswordSuccess = () => {
  $('#changePassModal').modal('hide');
  $('#change-password-button').css('opacity', '0.5');
};

const signOutSuccess = () => {
  app.user = null;
  logOutView();
};

module.exports = {
  success,
  failure,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  signUpSuccess,
  signInFailure,
};
