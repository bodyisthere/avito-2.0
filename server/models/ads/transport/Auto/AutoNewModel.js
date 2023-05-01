import mongoose, { Schema } from "mongoose";

const AutoNewSchema = new mongoose.Schema({
  name:  { type: String, required: true},
  photo: { type: Array, required: true},
  video: { type: String, required: false},
  description: { type: String, required: true},
  meetingPoint: { type: String, required: true},
  price: { type: String, required: true},
  
  type: {type: String, required: true},
  brand: { type: String, required: true },
  vehiclePassport: { type: String, required: true },
  inspectionData: { type: String, required: false },
  color: { type: String, required: true },
  additionalOptions: { type: Array, required: false},
  VIN: { type: String, required: true},

})

export default mongoose.model("AutoNewAds", AutoNewSchema);