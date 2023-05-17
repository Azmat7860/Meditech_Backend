import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  description: {
    type: String,
  },
  appointment_type:{
    type: String,
        enum: ['video', 'physical' ],
        required: true,
  },
  user_id: {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required:true
},
doctor_id: {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required:true
},
});
export default mongoose.model("Appointment", schema);
