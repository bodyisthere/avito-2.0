import mongoose, { Schema } from "mongoose";

const AutoRunSchema = new mongoose.Schema({
  data: {
    typeOfAds: {type: String, required: true},
    name:  { type: String, required: true},
    photo: { type: Array, required: true},
    video: { type: String, required: false},
    description: { type: String, required: true},
    meetingPoint: { type: String, required: true},
    price: { type: String, required: true},
  
    governmentNumber: {main: {type: String, required: false}}, region: {type: Number, required: false},
    mileage: {type: Number, required: false}, 
    condition: { type: String, required: true },
    vehiclePassportOwners: { type: String, required: true },
    carBody: { type: Array, required: false },
    brand: { type: String, required: true },
    vehiclePassport: { type: String, required: true },
    inspectionData: { type: Array, required: false },
    color: { type: String, required: true },
    additionalOptions: { type: Array, required: false},
    VIN: { type: String, required: true},
  },
  owner: { type: String, required: true}
})

export default mongoose.model("AutoRunAds", AutoRunSchema);