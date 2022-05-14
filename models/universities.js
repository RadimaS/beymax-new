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
    faculties: [{ type: Schema.Types.ObjectId, ref: "Faculties" }],
  },
  { timestamps: true }
);

const Universities = mongoose.model("Universities", universitiesSchema);

module.exports = Universities;
