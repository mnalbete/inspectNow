const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PropertyInfo = require("./property_info")
const propertySchema = new Schema({
    id: {type: String, require: true},
    property_info: { type: PropertyInfo },
    report_overview: { type: String},
    front_door: { type: String},
    hvac: { type: String},
    ceiling: { type: String}
})

const Properties = mongoose.model("Properties", propertySchema);

module.exports = Properties;