'use strict';

// SIGN IN
$('#sign-in-button').on('click', function() {
  $('#introModal').modal('hide');
    $('#signInModal').modal('show');
});

// SIGN UP
$('#sign-up-button').on('click', function() {
  $('#introModal').modal('hide');
    $('#signUpModal').modal('show');
});

$('#sign-up-submit').on('click', function(){
  $('#signUpModal').modal('hide');
});

// CHANGE PASSWORD
$('#change-password-button').on('click', function() {
  $('#changePassModal').modal('show');
});

$('#change-password-button').on('click', function() {
  $('#changePassModal').modal('show');
});

module.exports = {
  
};
