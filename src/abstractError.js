"use strict";
var util = require('util');

var _AbstractError = function (targetSetting, constr){
    targetSetting = targetSetting || {};
    this.name = 'CustomError';
    this.type = targetSetting.type || 'Application';
    this.message = targetSetting.message || 'An error occurred'
    this.detail = targetSetting.detail || '';
    this.extendedInfo = targetSetting.extendedInfo || '';
    this.errCode = targetSetting.errCode || '';
    this.rootCause = targetSetting.rootCause || null;
    this.isAppErr = true;

    Error.captureStackTrace(this, constr || this);
};

util.inherits(AbstractError, Error);
_AbstractError.prototype.name = 'Abstract Error';

module.exports = {
    AbstractError:_AbstractError
}