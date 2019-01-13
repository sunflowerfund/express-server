/*
 * Sunflower Fund Organisation
 * License(s): Apache 2.0
 * Website: https://www.sunflowerfundregistry.com/
 * Github: https://github.com/sunflowerfund
 * Description: This is a file consisting of the Main Routing
 * Module that will monitor how you navigate through the app/site
 */

// Imports

const express = require('../app.import').express;
const bodyParser = require('../app.import').bodyParser;

const auth = express();
auth.use(bodyParser.json());
auth.use(bodyParser.urlencoded({
    extended: true
}));

const FirebaseAuth = require('../firebase/firebase').FirebaseAuth;

const firebaseAuth = new FirebaseAuth();








auth.post('/:email/:password', (req, res) => {
    const email = req.params.email;
    const password = req.params.password;


    firebaseAuth.signUpWithEmail(email, password).then(
        (currentUser) => {
            res.status(201).send(currentUser);
        }
    ).catch((error) => {
        res.status(406).send(error.message);
    });
});

auth.get('/:email/:password', (req, res) => {
    const email = req.params.email;
    const password = req.params.password;

    firebaseAuth.signInWithEmail(email, password).then(
        (currentUser) => {
            console.log(currentUser.emailVerified)
            res.status(202).send(currentUser);
        }
    ).catch((error) => {
        res.status(406).send(error.message);
    });
});

auth.put('/update', (req, res) => {
    const updProfile = {
        displayName: req.body.displayName,
        photoURL: req.body.photoURL
    };
    
    firebaseAuth.updateAuth(updProfile).then((onfulfilled) => {
        res.send(firebaseAuth.auth.currentUser.toJSON());
    })
});

module.exports.Auth = auth;