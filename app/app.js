/*
* Sunflower Fund Organisation
* License(s): Apache 2.0
* Website: https://www.sunflowerfundregistry.com/
* Github: https://github.com/sunflowerfund
* Description: This is a file consisting of the Main Routing
* Module that will monitor how you navigate through the app/site
*/


// imports
const express = require('./app.import').express;
const bodyParser = require('./app.import').bodyParser;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

const _auth = require('./app.import').Auth;


// const _auth = require('./app.import').Auth();




const PORT = process.env.PORT||4300;

// const app = express();
// const bodyParser = body_parser();

// app.use(bodyParser.json());
    app.use('/auth', _auth).listen(PORT,()=> {
    console.log(`Sunflower Fund Organization Server Started: ${PORT} - ${new Date()}`)});