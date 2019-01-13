/*
 * Sunflower Fund Organisation
 * License(s): Apache 2.0
 * Website: https://www.sunflowerfundregistry.com/
 * Github: https://github.com/sunflowerfund
 * Description: This is a file consisting of the Main Routing
 * Module that will monitor how you navigate through the app/site
 */

class Auth {

    constructor(uid, email, displayName, photoUrl) {
        this.uid = uid;
        this.email = email;
        this.profile.displayName = displayName;
        this.profile.photoUrl = photoUrl;
    }

    updateAuth(displayName, photoUrl) {
        this.profile.displayName = displayName;
        this.profile.photoUrl = photoUrl;
    }
}