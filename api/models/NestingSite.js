import mongoose from "mongoose";

const NestingSiteSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  beach: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("NestingSite", NestingSiteSchema);
