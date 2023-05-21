import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  patient_name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  appointment_type: {
    type: String,
    enum: ["video", "physical"],
  },
  doctor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
});
export default mongoose.model("Appointment", schema);
