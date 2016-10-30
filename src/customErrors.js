var util = require('util');
var AbstractErrors = require('./abstractError');

var _BadRequestError = function (settings){
    AbstractErrors.super_.call(this, settings, this.constructor);
}

util.inherits(BadRequestError, AbstractErrors);

modules.exports = {
    BadRequestError: _BadRequestError
}
