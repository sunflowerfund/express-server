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
const bodyParser = require('../app.import').bodyParser

const Firestore = require('../firebase/firebase').Firestore;

const firestore = new Firestore();

const user = express();

user.use(bodyParser.json()).
use(bodyParser.urlencoded({
    extended: true
}));

user.get('/:uid', (req, res) => {
    const uid = req.params.uid;
    // todo: validate
    firestore._userCollection.getUser(uid).then((user) => {
        return res.status(user.code).send(user.data);
    }).catch((error) => {
        return res.status(error.code).send(error.message);
    })
});

user.post('/:uid', (req, res) => {
    const uid = req.params.uid;
    const newUser = req.body;

    // todo: validate
    firestore._userCollection.addUser(uid, newUser).then((user) => {
        return res.status(user.code).send(user.data);
    }).catch((error) => {
        return res.status(error.code).send(error.message);
    })
});

user.put('/:uid', (req, res) => {
    const uid = req.params.uid;
    const updateUser = req.body;
    // todo: validate
    firestore._userCollection.updateUser(uid, updateUser).then((user) => {
        return res.status(user.code).send(user.data)
    }).catch((error) => {
        return res.status(error.code).send(error.message);
    });
});

user.delete('/:uid', (req, res) => {
    const uid = req.params.uid;
    // Todo: Validation
    firestore._userCollection.deleteUser(uid).then((deleted) => {
        return res.status(deleted.code).send(deleted.data);
    }).catch((error) => {
        return res.status(error.code).send(error.message);
    });
});

module.exports.User = user;