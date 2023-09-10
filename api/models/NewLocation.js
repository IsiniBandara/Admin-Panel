import mongoose from "mongoose";

const NewLocationSchema = new mongoose.Schema({
  originalLocation: {
    type: String,
    required: true,
  },
  newLocation: {
    type: String,
    required: true,
  },
  relocationDate: {
    type: Date,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
});

export default mongoose.model("NewLocation", NewLocationSchema);
