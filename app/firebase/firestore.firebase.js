/*
 * Sunflower Fund Organisation
 * License(s): Apache 2.0
 * Website: https://www.sunflowerfundregistry.com/
 * Github: https://github.com/sunflowerfund
 * Description: This is a file consisting of the Main Routing
 * Module that will monitor how you navigate through the app/site
 *  var config = {
    apiKey: "AIzaSyC_q4ThS5Hds8MXkwf1tEzTwSkMgrAVQ3k",
    authDomain: "sunflowerregistry.firebaseapp.com",
    databaseURL: "https://sunflowerregistry.firebaseio.com",
    projectId: "sunflowerregistry",
    storageBucket: "sunflowerregistry.appspot.com",
    messagingSenderId: "794170287647"
  };
 */

const firebase = require('./firebase').Firebase;

/* Collections */
const DonorCollection = require('./collections/donor.collection').DonorCollection;
const UserCollection = require('./collections/user.collection').UserCollection;
const CountryCollection = require('./collections/country.collection').CountryCollection;
const ContactCollection = require('./collections/contact.collection').ContactCollection;
const AddressCollection = require('./collections/address.collection').AddressCollection;
const IDCollection = require('./collections/idnumber.collection').IDCollection;


const donorCollection = new DonorCollection();
const userCollection = new UserCollection();
const countryCollection = new CountryCollection();
const contactCollection = new ContactCollection();
const addressCollection = new AddressCollection();
const idCollection = new IDCollection();

// const firestore = firebase.firestore();
// const settings = {
//     timestampsInSnapshots: true
// };
//  firestore.settings(settings);


class Firestore {

    constructor() {
        this._donorCollection = donorCollection;
        this._userCollection = userCollection;
        this._countryCollection = countryCollection;
        this._contactCollection = contactCollection;
        this._addressCollection = addressCollection;
        this._idCollection = idCollection;
    }

    async createNewUser(uid) {
        return await this.firestore.collection("donor");
    }

}

module.exports.Firestore = Firestore;