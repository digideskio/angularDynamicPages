'use_strict'
var mongoose = require('mongoose');


var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/visacal');


var customersModel = require('./server/models/customers').customersModel;
var employeeInfoModel = require('./server/models/employeeinfo').employeeInfoModel;



var user = {};

var member = {};


function createCustomers(firstName, lastName, id, number, street, rank)
{
  var cust = {};
  cust.firstName = firstName;
  cust.lastName = lastName;
  cust.userid = id;
  cust.city = 'Azor';
  cust.street = street;
  cust.number = number;
  cust.rank = rank;
  var c = new customersModel(cust);

  c.save(function (err, user) {

    console.log("creating.. " + cust.firstName);
  });
}

function createEmployeeInfoModel(firstName, lastName, city, id, number, street)
{
  var e = {};
  e.firstName = firstName;
  e.lastName = lastName;
  e.userid = id;
  e.city = 'Azor';
  e.street = street;
  e.number = number;
  e.picture = '/images/' + id + '.jpg';

  var c = new employeeInfoModel(e);
  c.save(function (err, user) {

    console.log("creating.. " + e.firstName);
  });
}


/*
createCustomers('moshe', 'ofnik', '94912123' , 8, 'haslom' , 2);
createCustomers('wilam', 't.riker', '1912882' , 8, 'enterprise' , 2);
createCustomers('data', 'data', '2912882' , 1, 'enterprise' , 2);
createCustomers('Jan luck', 'pickard', '2911182' , 2, 'enterprise' , 5);
*/

createEmployeeInfoModel('borg', 'collective', 'enterprise', '1491223' , 8, 'cube' );
createEmployeeInfoModel('wilam', 't.riker', 'enterprise','1912882' , 8, 'bridge');
createEmployeeInfoModel('data', 'data', 'enterprise','2912882' , 1, 'bridge');
createEmployeeInfoModel('Jan luck', 'enterprise','pickard', '2911182' , 2, 'deck-9');


process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));
