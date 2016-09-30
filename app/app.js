
var pull = require('./pull.js');

var tenMins = 600000;

setInterval(pull.getData, tenMins);
