/*
 * Sunflower Fund Organisation
 * License(s): Apache 2.0
 * Website: https://www.sunflowerfundregistry.com/
 * Github: https://github.com/sunflowerfund
 * Description: This is a file consisting of the Main Routing
 * Module that will monitor how you navigate through the app/site
 */

 const firebase = require('./firebase').Firebase;

 const firebaseAuth = firebase.auth();
//  const applicationVerifier = ne.RecaptchaVerifier(
//     'recaptcha-container');

 class Auth {

    constructor(){
        this.auth = firebaseAuth;
    }

    // signInWithPhone(phone){
    //  return  firebaseAuth.signInWithPhoneNumber(phone, )
    //   .then(function(confirmationResult) {
    
    //     return confirmationResult.confirm(117144);
    //   })
    //   .catch(function(error) {
    //     // Handle Errors here.
    //   });
      
    // }

    async signUpWithEmail(email,password){
        return  await this.auth.createUserWithEmailAndPassword(email,password).then((creds)=>{
           return creds.user;
        });
        
    }

    async signInWithEmail(email, password){
        return await this.auth.signInWithEmailAndPassword(email,password).then(
            (creds) =>{
                return creds.user;
            }
        )
    }

    async updateAuth(authObj){
        return await this.auth.currentUser.updateProfile({
            displayName: authObj.displayName,
            photoURL: authObj.photoURL
        }).then((onfulfilled)=>{
            return true;
        }).catch((error)=>{
            return false;
        })
    }

 }

 module.exports.FirebaseAuth = Auth;