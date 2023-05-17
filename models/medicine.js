import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  usage: {
    type: String,
    required: true,
  },
  side_effect: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  medicine_image: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Medicine", schema);
