'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

let gameEvents = require('./game/events.js');
let authEvents = require('./auth/events.js');

$(document).ready(function() {
  $('#new-game').hide();
  gameEvents.addHandlers();
  authEvents.addHandlers();
});
