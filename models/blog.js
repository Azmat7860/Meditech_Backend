import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  title: { 
    type: String, 
    required: true,
  },
  category: { 
    type: String, 
    required: true,
  },
  description: { 
    type: String, 
    required: true 
  },
  blog_image:{
    type: String,
    required: true
  }
});
export default mongoose.model("Blog", schema);
