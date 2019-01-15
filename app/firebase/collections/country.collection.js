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


class CountryCollection {
    constructor(){
        this.countryCollection = firestore.collection("country");
    }


    async getCountry(id) {
        return await this.countryCollection.doc(id).get().then((country) => {
            if (country.data())
                return {
                    code: 302,
                    data: country.data()
                };
            else return {
                code: 404,
                message: 'country does not exist!'
            }
        }).catch((error) => {
            return {
                code: 404,
                message: error.message
            };
        });
    }

    async addCountry(id, country) {
        return await this.countryCollection.doc(id).set(country).then(() => {
            return {
                code: 201,
                data: country
            };
        }).catch((error) => {
            return {
                code: 417,
                message: error.message
            };
        });
    }

    async updateCountry(id, country) {
        return await this.countryCollection.doc(id).update(country).then(() => {
            return {
                code: 202,
                data: country
            };
        }).catch((error) => {
            return {
                code: 417,
                message: error.message
            };
        });
    }

    async deleteCountry(id) {
        return await this.countryCollection.doc(id).delete().then(() => {
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

module.exports.CountryCollection = CountryCollection;
