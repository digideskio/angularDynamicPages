'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var EmployeeInfoSchema = new Schema({

    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    userid: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    street: {
        type: String,
        trim: true
    },
    number: {
        type: Number,
        trim: true
    },
    Age: {
        type: Number,
        trim: true
    },
    picture: {
        type: String,
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
});


var employeeInfoModel = mongoose.model('EmployeeInfo', EmployeeInfoSchema);

module.exports = {
    employeeInfoModel: employeeInfoModel

}

