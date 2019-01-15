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

const address = express();

address.use(bodyParser.json()).
use(bodyParser.urlencoded({
    extended: true
}));

address.get('/:id', (req, res) => {
    const id = req.params.id;
    // todo: validate
    firestore._addressCollection.getAddress(id).then((address) => {
        return res.status(address.code).send(address.data);
    }).catch((error) => {
        return res.status(error.code).send(error.message);
    })
});

address.post('/:id', (req, res) => {
    const id = req.params.id;
    const newAddress = req.body;

    // todo: validate
    firestore._addressCollection.addAddress(id, newAddress).then((address) => {
        return res.status(address.code).send(address.data);
    }).catch((error) => {
        return res.status(error.code).send(error.message);
    })
});

address.put('/:id', (req, res) => {
    const id = req.params.id;
    const updateAddress = req.body;
    // todo: validate
    firestore._addressCollection.updateAddress(id, updateAddress).then((address) => {
        return res.status(address.code).send(address.message);
    }).catch((error) => {
        return res.status(error.code).send(error.message);
    });
});

address.delete('/:id', (req, res) => {
    const id = req.params.id;
    // Todo: Validation
    firestore._addressCollection.deleteAddress(id).then((deleted) => {
        return res.status(deleted.code).send(deleted.data);
    }).catch((error) => {
        return res.status(error.code).send(error.message);
    });
});

module.exports.Address = address;