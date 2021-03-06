const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  properties: [
    {
      type: Schema.Types.ObjectId,
      ref: "Property"
    }
  ]
});

module.exports = User = mongoose.model("users", UserSchema);