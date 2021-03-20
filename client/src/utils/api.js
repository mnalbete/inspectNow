import axios from "axios";

class API {

    axios;

    constructor() {

        this.axios = axios.create();

    }

    /**
     * @param {String} name 
     * @param {String} value 
     */
    setHeader( name, value ) {

        if( value )

            this.axios.defaults.headers.common[name] = value;

        else

            delete this.axios.defaults.headers.common[name];

    }

    /**
     * @param {object} userData 
     * @param {String} userData.email
     * @param {String} userData.password
     * 
     * @returns {Promise}
     */
    register( userData ) {

        return this.axios.post("/register", userData);

    }


    /**
     * @param {object} userData 
     * @param {String} userData.email
     * @param {String} userData.password
     * 
     * @returns {Promise}
     */
    login( userData ) {

        return this.axios.post("/login", userData);

    }

    authenticated() {

        return this.axios.post("/authenticated");

    }

    getAllProperties( userId ) {
        return this.axios.get("api/properties", userId)
    }

    // create a property for a user
    createProperty( userId ) {
        return axios.post("/api/properties", userId);
    }

    // Gets one property by ID
    getOneProperty( id ) {
        return axios.get("/api/properties" + id);
    }

    // Gets book with the given ID
    saveProperty( id, userId ) {
    return axios.put("/api/peroperties/" + id, userId);
    }

    // Deletes property from db and user
    deletePeroperty(id, userId) {
        return axios.delete("/api/properties/" + id, userId);
    }

}

export default new API();