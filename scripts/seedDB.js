const mongoose = require("mongoose");
const db = require("../models");
const fs = require('fs');

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/properties"
);

const propertySeed = [
  {
    property_info:      {
      address: "new address",
      image: {
        name: "bathroom",
        img: {
        data: fs.readFileSync('C:/Users/ralph/Desktop/HW/project-3/inspectnow/client/public/bathroom.jpg'),
        contentType: 'image/png'       
      }
    }} ,
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
