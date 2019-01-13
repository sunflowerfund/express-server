/*
 * Sunflower Fund Organisation
 * License(s): Apache 2.0
 * Website: https://www.sunflowerfundregistry.com/
 * Github: https://github.com/sunflowerfund
 * Description: This is a file consisting of the Main Routing
 * Module that will monitor how you navigate through the app/site
 */


module.exports.express =  require('express');
module.exports.bodyParser = require('body-parser');
module.exports.Auth = require('./server/auth').Auth;
