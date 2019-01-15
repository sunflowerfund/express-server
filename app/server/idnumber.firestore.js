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

const idnumber = express();

idnumber.use(bodyParser.json()).
use(bodyParser.urlencoded({
    extended: true
}));

idnumber.get('/:id', (req, res) => {
    const id = req.params.id;
    // todo: validate
    firestore._idCollection.getIdNumber(id).then((idnumber) => {
        return res.status(idnumber.code).send(idnumber.data);
    }).catch((error) => {
        return res.status(error.code).send(error.message);
    })
});

idnumber.post('/:id', (req, res) => {
    const id = req.params.id;
    const newIDNumber = req.body;

    // todo: validate
    firestore._idCollection.addIdNumber(id, newIDNumber).then((idnumber) => {
        return res.status(idnumber.code).send(idnumber.data);
    }).catch((error) => {
        return res.status(error.code).send(error.message);
    })
});

idnumber.put('/:id', (req, res) => {
    const id = req.params.id;
    const updateNumber = req.body;
    // todo: validate
    firestore._idCollection.updateIdNumber(id, updateNumber).then((idnumber) => {
        return res.status(idnumber.code).send(idnumber.message);
    }).catch((error) => {
        return res.status(error.code).send(error.message);
    });
});

idnumber.delete('/:id', (req, res) => {
    const id = req.params.id;
    // Todo: Validation
    firestore._idCollection.deleteIdNumber(id).then((deleted) => {
        return res.status(deleted.code).send(deleted.data);
    }).catch((error) => {
        return res.status(error.code).send(error.message);
    });
});

module.exports.IDNumber = idnumber;