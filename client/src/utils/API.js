// Required module
import axios from "axios";

export default {
    // Retrieves all properties for a user
    getAllProperties: function(userId) {
        return axios.get("api/properties", userId)
    },
    // create a property for a user
    createProperty: function(userId) {
        return axios.post("/api/properties", userId);
    },
    // Gets one property by ID
    getOneProperty: function(id) {
        return axios.get("/api/properties" + id);
    },
    // Gets book with the given ID
    saveProperty: function(id, userId) {
        return axios.put("/api/peroperties/" + id, userId);
    },
    // Deletes property from db and user
    deletePeroperty: function(id, userId) {
        return axios.delete("/api/properties/" + id, userId);
    }
};