const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PropertyInfo = require("./property_info")
const propertySchema = new Schema({
    id: {type: String, require: true},
    // property_info: { type: PropertyInfo },
    address: {type: String},
    report_overview: { type: String},
    front_door: {        
        type: String},
    hvac: { type: String},
    ceiling: { type: String},
    userId: 
    {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
      
})

const Property = mongoose.model("property", propertySchema);

module.exports = Property;