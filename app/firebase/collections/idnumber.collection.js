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

const firebase = require('../firebase').Firebase;

const firestore = firebase.firestore();

// dependencies
const CountryCollection = require('./country.collection').CountryCollection;

// referencies
const _country = new CountryCollection();


class IDCollection {
    constructor() {
        this.idnumberCollection = firestore.collection("idnumber");
    }

    async getIdNumber(id) {
        return await this.idnumberCollection.doc(id).get().then((idnumber) => {
            return _country.getCountry(idnumber.data().country.id).then((country) => {

                var data = idnumber.data();
                data.country = country.data;

                if (data)
                    return {
                        code: 302,
                        data: data
                    };
                else return new Error({
                    code: 404,
                    message: 'address does not exist!'
                });
            }).catch((error) => {
                return {
                    code: 403,
                    message: 'country not found'
                }
            });
        }).catch((error) => {
            console.log(error.message)
            return {
                code: 404,
                message: "error.message"
            };
        });
    }

    async addIdNumber(id, address) {
        address.country = _country.countryCollection.doc(address.country);

        return await this.idnumberCollection.doc(id).set(address).then(() => {
            return {
                code: 201,
                message: "address created/added successfully"
            }

        }).catch((error) => {
            return {
                code: 417,
                message: error.message
            };
        });
    }

    async updateIdNumber(id, idnumber) {
        idnumber.country = _country.countryCollection.doc(idnumber.country);
        console.log(idnumber);
        return await this.idnumberCollection.doc(id).update(idnumber).then(() => {
            return {
                code: 202,
                message: "id number successfully updated!"
            };
        }).catch((error) => {
            return {
                code: 417,
                message: "error occurred"
            };
        });
    }

    async deleteIdNumber(id) {
        return await this.idnumberCollection.doc(id).delete().then(() => {
            return {
                code: 200,
                data: `${id} - deleted!`
            };
        }).catch((error) => {
            return {
                code: 406,
                message: error.message
            };
        });
    }
}

module.exports.IDCollection = IDCollection;