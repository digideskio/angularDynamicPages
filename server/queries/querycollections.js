var customersModel = require('../models/customers').customersModel;
var employeeInfoModel = require('../models/employeeinfo').employeeInfoModel;

module.exports = function ()
{
    function run(queryId , parameters, page, callback)
    {
        // For now , because we dont know how the API is build we just use some queries in a switch case.
        // There are several options here
        // 1. The queries will be build dynamicly by the client or server . means generic query builder
        // 2. The server team will supply a set of deterministic , predefined queries and even an API how to call to each one.
        // 3. The server team will supply predefine queries but still will need to wrap them internally.
        console.log('queryId: ' + queryId);

        switch (parseInt(queryId))
        {
            case 1:
            {
                console.log('paramters : ' + parameters);
                employeeInfoModel.find(parameters).exec(function(err, result){
                    var res = {
                        content: result,
                        headerSchema : [
                            {
                                title:'שם פרטי' ,
                                field:'firstName'
                            },
                            {
                                title:'שם משפחה',
                                field:'lastName'
                            },
                            {
                                title:'תעודת זהות',
                                field:'userid'
                            },
                            {
                                title:'עיר',
                                field:'city'
                            },
                            {
                                title:'עיר',
                                field:'street'
                            },
                            {
                                title:'מספר רחוב',
                                field:'number'
                            },
                            {
                                title:'תמונה',
                                field:'picture'
                            }

                        ]
                    }
                    callback(err , res);
                });
            }
            break;
            case 2:
            {

            }
            break;
            case 3:
            {

            }
            break;
        }
    }
    return {
        run:run
    }
}




