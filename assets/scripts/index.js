'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

let gameEvents = require('./game/events.js');
let authEvents = require('./auth/events.js');

// MODAL HANDLERS

// SIGN IN
$('#sign-in-button').on('click', function() {
  $('#signInModal').modal('show');
});

  // i'll need to adjust this for bad passwords
$('#sign-in-submit').on('click', function(){
  $('#signInModal').modal('hide');
});

// SIGN UP
$('#sign-up-button').on('click', function() {
  $('#signUpModal').modal('show');
});

$('#sign-up-submit').on('click', function(){
  $('#signUpModal').modal('hide');
});

// CHANGE PASSOWRD
$('#change-password-button').on('click', function() {
  $('#changePassModal').modal('show');
});

$('#change-password-button').on('click', function() {
  $('#changePassModal').modal('show');
});

$(document).ready(function() {
  $('#new-game').hide();
  $('#change-password-button').hide();
  $('#sign-out-button').hide();

  gameEvents.addHandlers();
  authEvents.addHandlers();
});
