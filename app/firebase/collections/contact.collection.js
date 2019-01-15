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


class ContactCollection {
    constructor(){
        this.contactCollection = firestore.collection("contact");
    }


    async getContact(id) {
        return await this.contactCollection.doc(id).get().then((contact) => {
            if (contact.data())
                return {
                    code: 302,
                    data: contact.data()
                };
            else return new Error({
                code: 404,
                message: 'contact does not exist!'
            })
        }).catch((error) => {
            return {
                code: 404,
                message: error.message
            };
        });
    }

    async addContact(id, contact) {
        return await this.contactCollection.doc(id).set(contact).then(() => {
            return {
                code: 201,
                data: contact
            };
        }).catch((error) => {
            return {
                code: 417,
                message: error.message
            };
        });
    }

    async updateContact(id, contact) {
        return await this.contactCollection.doc(id).update(contact).then(() => {
            return {
                code: 202,
                data: contact
            };
        }).catch((error) => {
            return {
                code: 417,
                message: error.message
            };
        });
    }

    async deleteContact(id) {
        return await this.contactCollection.doc(id).delete().then(() => {
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

module.exports.ContactCollection = ContactCollection;
