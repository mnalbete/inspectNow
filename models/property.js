const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PropertyInfo = require("./property_info")
const propertySchema = new Schema({
    id: {type: String, require: true},
    property_info: { type: PropertyInfo },
    report_overview: { type: String},
    front_door: {        
        type: String},
    hvac: { type: String},
    ceiling: { type: String},
    userId: {type: String}
})

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;