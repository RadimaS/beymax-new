const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const directionsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  facultyName: {
    type: String,
    required: true,
  },
  subjects: [{ type: Schema.Types.ObjectId, ref: "Subjects" }],
});

const Directions = mongoose.model("Directions", directionsSchema);

module.exports = Directions;
