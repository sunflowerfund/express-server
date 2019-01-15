/*
 * Sunflower Fund Organisation
 * License(s): Apache 2.0
 * Website: https://www.sunflowerfundregistry.com/
 * Github: https://github.com/sunflowerfund
 * Description: This is a file consisting of the Main Routing
 * Module that will monitor interacting with the user document.
 */

const firebase = require('../firebase').Firebase;

const firestore = firebase.firestore();


class UserCollection {


    constructor() {
        this.userCollection = firestore.collection("user");
    }

    async getUser(uid) {
        return await this.userCollection.doc(uid).get().then((user) => {
            if (user.data())
                return {
                    code: 302,
                    data: user.data()
                };
            else return new Error({
                code: 404,
                message: 'user does not exist!'
            })
        }).catch((error) => {
            return {
                code: 404,
                message: error.message
            };
        });
    }

    async addUser(uid, newUser) {
        return await this.userCollection.doc(uid).set(newUser).then((user) => {
            return {
                code: 201,
                data: newUser
            };
        }).catch((error) => {
            return {
                code: 417,
                message: error.message
            };
        });
    }

    async updateUser(uid, updateUser) {
        return await this.userCollection.doc(uid).update(updateUser).then((user) => {
            return {
                code: 202,
                data: updateUser
            };
        }).catch((error) => {
            return {
                code: 417,
                message: error.message
            };
        });
    }

    async deleteUser(uid) {
        return await this.userCollection.doc(uid).delete().then((deleted) => {
            return {
                code: 200,
                data: "user deleted!"
            };
        }).catch((error) => {
            return {
                code: 406,
                message: error.message
            };
        });
    }

}

module.exports.UserCollection = UserCollection;