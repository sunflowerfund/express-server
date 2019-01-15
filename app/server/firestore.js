/*
 * Sunflower Fund Organisation
 * License(s): Apache 2.0
 * Website: https://www.sunflowerfundregistry.com/
 * Github: https://github.com/sunflowerfund
 * Description: This is a file consisting of the Main Routing
 * Module that will monitor calls to fetch data from the user collection.
 */

// Imports

const express = require('../app.import').express;
const bodyParser = require('../app.import').bodyParser;

const store = express();

store.use(bodyParser.json())
.use(bodyParser.urlencoded({
     extended: true
}))

const _user = require('./user.firestore').User;
const _country = require('./country.firestore').Country;
const _address = require('./address.firestore').Address;
const _contact = require('./contact.firestore').Contact;
const _idnumber = require('./idnumber.firestore').IDNumber



store.use('',_user);
store.use('/country',_country);
store.use('/address',_address);
store.use('/contact',_contact);
store.use('/id',_idnumber);



module.exports.Store = store;