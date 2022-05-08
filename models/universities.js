const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const universitiesSchema = new Schema(
  {
    blockName: {
      type: String,
      required: true,
    },
    universityName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    nameClass: {
      type: String,
    },
  },
  { timestamps: true }
);

const Universities = mongoose.model("Universities", universitiesSchema);

module.exports = Universities;
