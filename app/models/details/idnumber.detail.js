/*
 * Sunflower Fund Organisation
 * License(s): Apache 2.0
 * Website: https://www.sunflowerfundregistry.com/
 * Github: https://github.com/sunflowerfund
 * Description: This is a file consisting of the Main Routing
 * Module that will monitor how you navigate through the app/site
 */

class idnumber{
    constructor ( number, country){
        this.number = number;
        this.country = country;
    }
}

module.exports.IdNumber = idnumber;