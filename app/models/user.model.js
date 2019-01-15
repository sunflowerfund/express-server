/*
 * Sunflower Fund Organisation
 * License(s): Apache 2.0
 * Website: https://www.sunflowerfundregistry.com/
 * Github: https://github.com/sunflowerfund
 * Description: This is a file consisting of the Main Routing
 * Module that will monitor how you navigate through the app/site
 */


class user {

    constructor(
        idnumber,
        firstname,
        lastname,
        dateofbirth,
        ethnicity,
        address,
        homephone,
        workphone,
        mobile,
        email
    ) {
        this.idnumber = idnumber;
        this.firstname = firstname;
        this.lastname = lastname;
        this.dateofbirth = dateofbirth;
        this.ethnicity = ethnicity;
        this.address = address;
        this.homephone = homephone;
        this.workphone = workphone;
        this.mobile = mobile;
        this.email = email;
    }
}

module.exports.User = user;