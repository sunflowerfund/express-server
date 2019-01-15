/*
 * Sunflower Fund Organisation
 * License(s): Apache 2.0
 * Website: https://www.sunflowerfundregistry.com/
 * Github: https://github.com/sunflowerfund
 * Description: This is a file consisting of the Main Routing
 * Module that will monitor how you navigate through the app/site
 */

 class address{
     constructor ( street, region, city, state, country, code ){
         this.street = street;
         this.region = region;
         this.city = city;
         this.state = state;
         this.country = country;
         this.code = code;
     }
 }

 module.exports.Address = address;