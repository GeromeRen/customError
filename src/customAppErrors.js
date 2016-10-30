"use strict";
var util = require('util');
var AbstractErrors = require('./abstractError');

var _BadRequestError = function (settings){
    AbstractErrors.super_.call(this, settings, this.constructor);
};

_BadRequestError.prototype.name = 'Bad Request Error';

util.inherits(BadRequestError, AbstractErrors);

modules.exports = {
    BadRequest: _BadRequestError
}
