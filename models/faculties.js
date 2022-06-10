const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const facultiesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  getdirections: [{ type: Schema.Types.ObjectId, ref: "GetDirections" }],
});

const Faculties = mongoose.model("Faculties", facultiesSchema);

module.exports = Faculties;
