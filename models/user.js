import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  name: { 
    type: String, 
    required: true,
  },
  email: { 
    type: String, 
    required: true, 
    maxlength: 100 
  },
  password: { 
    type: String, 
    required: true 
  },
});
export default mongoose.model("User", schema);
