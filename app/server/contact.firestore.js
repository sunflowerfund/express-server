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

const contact = express();

contact.use(bodyParser.json()).
use(bodyParser.urlencoded({
    extended: true
}));

contact.get('/:id', (req, res) => {
    const id = req.params.id;
    // todo: validate
    firestore._contactCollection.getContact(id).then((contact) => {
        return res.status(contact.code).send(contact.data);
    }).catch((error) => {
        return res.status(error.code).send(error.message);
    })
});

contact.post('/:id', (req, res) => {
    const id = req.params.id;
    const newContact = req.body;

    // todo: validate
    firestore._contactCollection.addContact(id, newContact).then((contact) => {
        return res.status(contact.code).send(contact.data);
    }).catch((error) => {
        return res.status(error.code).send(error.message);
    })
});

contact.put('/:id', (req, res) => {
    const id = req.params.id;
    const updateContact = req.body;
    // todo: validate
    firestore._contactCollection.updateContact(id, updateContact).then((contact) => {
        return res.status(contact.code).send(contact.data)
    }).catch((error) => {
        return res.status(error.code).send(error.message);
    });
});

contact.delete('/:id', (req, res) => {
    const id = req.params.id;
    // Todo: Validation
    firestore._contactCollection.deleteContact(id).then((deleted) => {
        return res.status(deleted.code).send(deleted.data);
    }).catch((error) => {
        return res.status(error.code).send(error.message);
    });
});

module.exports.Contact = contact;