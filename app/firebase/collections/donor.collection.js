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


class DonorCollection {
    constructor(){
        this.donorCollection = firestore.collection("donor");
    }


    async getDonor(id) {
        return await this.donorCollection.doc(id).get().then((donor) => {
            if (donor.data())
                return {
                    code: 302,
                    data: donor.data()
                };
            else return new Error({
                code: 404,
                message: 'donor does not exist!'
            })
        }).catch((error) => {
            return {
                code: 404,
                message: error.message
            };
        });
    }

    async addDonor(id, donor) {
        return await this.donorCollection.doc(id).set(donor).then(() => {
            return {
                code: 201,
                data: donor
            };
        }).catch((error) => {
            return {
                code: 417,
                message: error.message
            };
        });
    }

    async updateDonor(id, donor) {
        return await this.donorCollection.doc(id).update(donor).then(() => {
            return {
                code: 202,
                data: donor
            };
        }).catch((error) => {
            return {
                code: 417,
                message: error.message
            };
        });
    }

    async deleteDonor(id) {
        return await this.donorCollection.doc(id).delete().then(() => {
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






































    async newDonor(uid){
        return await this.donorCollection.add(uid);
    }

    async updateDonor(donorObj){
        return this.donorCollection.doc(donorObj.uid).update(
            donorObj.donor
        );
    }
    async getDonor(uid){
       return await this.donorCollection.doc(uid).get().then((user)=>{
           console.log(user.data());
                if(user.data())
                    return { code:302, data: user.data() };
                        else return new Error({code:404,message:'user does not exist!'})
            }).catch((error)=>{
                return {code:404, message: error.message};
            });
    }

    
}

module.exports.DonorCollection = DonorCollection;
