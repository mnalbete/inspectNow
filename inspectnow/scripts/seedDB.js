const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/properties"
);

const propertySeed = [
  {
    property_info:      {address: "new address"} ,
    report_overview: "",
    front_door: "",
    hvac: "",
    ceiling: ""
  },
];

db.Properties
  .remove({})
  .then(() => db.Properties.collection.insertMany(propertySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
