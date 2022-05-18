const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lectures = new Schema({
  item: {
    type: String,
    required: true,
  },
  lecture: {
    type: String,
    required: true,
  },
  practice: {
    type: String,
    required: true,
  },
  // directionsNew: [{ type: Schema.Types.ObjectId, ref: "DirectionsNew" }],
});

const Lectures = mongoose.model("Lectures", lectures);

module.exports = Lectures;
