const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subjects = new Schema({
  item: {
    type: String,
    required: true,
  },
  directionName: {
    type: String,
    required: true,
  },
  lectures: [{ type: Schema.Types.ObjectId, ref: "Lectures" }],
});

const Subjects = mongoose.model("Subjects", subjects);

module.exports = Subjects;
