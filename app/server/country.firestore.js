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

const country = express();

country.use(bodyParser.json()).
use(bodyParser.urlencoded({
    extended: true
}));

country.get('/:id', (req, res) => {
    const id = req.params.id;
    // todo: validate
    firestore._countryCollection.getCountry(id).then((user) => {
        return res.status(user.code).send(user.data);
    }).catch((error) => {
        return res.status(error.code).send(error.message);
    })
});

country.post('/:id', (req, res) => {
    const id = req.params.id;
    const newUser = req.body;

    // todo: validate
    firestore._countryCollection.addCountry(id, newUser).then((user) => {
        return res.status(user.code).send(user.data);
    }).catch((error) => {
        return res.status(error.code).send(error.message);
    })
});

country.put('/:id', (req, res) => {
    const id = req.params.id;
    const updateUser = req.body;
    // todo: validate
    firestore._userCollection.updateUser(id, updateUser).then((user) => {
        return res.status(user.code).send(user.data)
    }).catch((error) => {
        return res.status(error.code).send(error.message);
    });
});

country.delete('/:id', (req, res) => {
    const id = req.params.id;
    // Todo: Validation
    firestore._userCollection.deleteUser(id).then((deleted) => {
        return res.status(deleted.code).send(deleted.data);
    }).catch((error) => {
        return res.status(error.code).send(error.message);
    });
});

module.exports.Country = country;