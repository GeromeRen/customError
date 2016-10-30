"use strict";
var CustomAppErrors = require('./customAppErrors');

function asynchronizeSampleMethod (id, callback){
    var settings = {
        //TODO
    };
    return callback(new CustomAppErrors.BadRequest(settings));
}

function synchronizedSampleMethod(name){
    var validateField = function(name){
        //Throw invalid input name Exception
    };

    try{
        validateField(name);
    } catch(ex){
        throw(new CustomAppErrors.BadRequest({
            type: "CustomAppErr.BadRequest",
            message: "Name is not valid",
            detail: util.format("The argument name [%s] is not valid.", String(name)),
            extra: util.inspect(arguments),
            rootCause: ex
        }));
    }
}

//TODO
//https://www.bennadel.com/blog/2886-experimenting-with-russian-doll-error-reporting-in-node-js.htm