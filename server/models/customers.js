'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var CustomersSchema = new Schema({

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
    rank: {
        type: String,
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
});


var customersModel = mongoose.model('Customers', CustomersSchema);

module.exports = {
    customersModel: customersModel

}

