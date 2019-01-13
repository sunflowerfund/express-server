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
const firebaseconfig =  {
    apiKey: "AIzaSyC_q4ThS5Hds8MXkwf1tEzTwSkMgrAVQ3k",
    authDomain: "sunflowerregistry.firebaseapp.com",
    databaseURL: "https://sunflowerregistry.firebaseio.com",
    projectId: "sunflowerregistry",
    storageBucket: "sunflowerregistry.appspot.com",
    messagingSenderId: "794170287647"
  };
 const firebase = require('firebase');
 const firebaseInit = firebase.initializeApp(firebaseconfig);

 module.exports.Firebase = firebaseInit; 
 module.exports.FirebaseAuth = require('./auth.firebase').FirebaseAuth;