const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const directionsNewSchema = new Schema({
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
const GetDirections = mongoose.model("GetDirections", directionsNewSchema);

module.exports = GetDirections;



