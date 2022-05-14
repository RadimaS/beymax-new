const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const directionsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  item1: {
    type: String,
    required: true,
  },
  item2: {
    type: String,
    required: true,
  },
  item3: {
    type: String,
    required: true,
  },
  item4: {
    type: String,
    required: true,
  },
  facultyName: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

const Directions = mongoose.model("Directions", directionsSchema);

module.exports = Directions;
