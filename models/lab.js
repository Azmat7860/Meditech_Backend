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
    required: true,
    minlength: 6
  },
  phone: { 
    type: String, 
    required: true
  },
  address: { 
    type: String, 
    required: true
  },
  certificate: { 
    type: String, 
    required: true 
  },
});
export default mongoose.model("Lab", schema);
