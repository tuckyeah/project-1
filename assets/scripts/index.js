'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

let gameEvents = require('./game/events.js');
let authEvents = require('./auth/events.js');

// MODAL HANDLERS

// SIGN IN
$('#sign-in-button').on('click', function () {
  $('#introModal').modal('hide');
  $('#signInModal').modal('show');
});

// SIGN UP
$('#sign-up-button').on('click', function () {
  $('#introModal').modal('hide');
  $('#signUpModal').modal('show');
});

// CHANGE PASSWORD
$('#change-password-button').on('click', function () {
  $('#changePassModal').modal('show');
});

$('#change-password-button').on('click', function () {
  $('#changePassModal').modal('show');
});

const logInView = function () {
  $('nav').css('visibility', 'hidden');
  $('li.stacked:nth-child(2)').hide();
  // $('#change-password-button').hide();
  $('#sign-out').hide();
  $('.create-game').hide();
  $('.win-totals-bottom').hide();
  $('.winner').hide();
};

$(document).ready(function () {
  logInView();
  gameEvents.addHandlers();
  authEvents.addHandlers();
  $('.game-status-banner').hide();
  $('.board-wrapper').css('display', 'none');

  // Put these in for testing navbar stuff:
  // $('#change-password-button').show();
  // $('#sign-out').show();
  // $('.create-game').show();
});
