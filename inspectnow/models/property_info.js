const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const property_infoSchema = new Schema({
    id: {type: String, require: true},
    address: {type: String, require: true}
})

module.exports = property_infoSchema;