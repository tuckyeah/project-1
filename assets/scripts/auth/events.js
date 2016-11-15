'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');


const onSignUp = function (event) {
  event.preventDefault();

  let signUpData = getFormFields(event.target);
  console.log(signUpData);

  api.signUp(signUpData)
    .done(function(data, textStatus, jqXHR) {
      // these variables are what the done function returns every time
      api.autoLogIn(data, textStatus, jqXHR, signUpData)
        .done(ui.signInSuccess)
        .fail(ui.signInFailure);
    })
    .fail(ui.signUpFailure);
};

const onSignIn = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.signInFailure);
};

const onJustPlay = function (event) {
  event.preventDefault();
  let tempUser = {
    'credentials': {
      'email': 'temp123@user123',
      'password': '123'
    }
  };

  let data = tempUser;
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.signInFailure);
};

const onChangePassword = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.changePasswordFailure);
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.signOutFailure);
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('click', onSignOut);
  $('#just-play-button').on('click', onJustPlay);
};

module.exports = {
  addHandlers,
};
