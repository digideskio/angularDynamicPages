'use_strict'
var mongoose = require('mongoose');


var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/visacal');


var customersModel = require('./server/models/customers').customersModel;


var user = {};

var member = {};


function createCustomers()
{
  var cust = {};
  cust.firstName = "Eli";
  cust.lastName = true;
  cust.userid = "027104918";
  cust.city = 'Azor';
  cust.street = 'Sprinchak';
  cust.number = 7;
  cust.rank = 1;
  var c = new customersModel(cust);

  c.save(function (err, user) {

    console.log("creating.. " + cust.firstName);
  });
}

createCustomers();

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));
