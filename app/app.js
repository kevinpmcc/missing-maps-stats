
var pull = require('./pull.js')

var scheduler  = setInterval(pull.getData, 5000)
