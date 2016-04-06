'use strict';


var customersModel = require('../models/customers').customersModel;
var employeeInfoModel = require('../models/employeeinfo').employeeInfoModel;


module.exports = function (sqlserver, mailer) {

    return {
        getView: function (req, res, next) {
            var model;
            switch (req.query.name)
            {
                case 'Customers':
                    model = customersModel;
                break;
                case 'EmployeeInfo':
                    model = employeeInfoModel;
                break;
            }
            model.find(function(err, result) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot list the members'
                    });
                }
                res.json(result)
            });
        }
    }
};