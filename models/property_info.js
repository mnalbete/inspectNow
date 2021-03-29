const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Image = require("./image")
const property_infoSchema = new Schema({
    id: {type: String, require: true},
    address: {type: String, require: true},
    homeowner: {type: String, require: true},
    inspector: {type: String, require: true},
    reportnumber: {type: String, require: true},
    frontdoorcomment: {type: String, require: true},
    inspectionDate: {type: String},
    realEstateAgentName: {type: String},
    inspectorInfo: {type: String},
    image: {type: Image}
})

module.exports = property_infoSchema;