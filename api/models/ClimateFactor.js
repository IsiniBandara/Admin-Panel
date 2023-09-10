import mongoose from "mongoose";

const ClimateFactorSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
  precipitation: {
    type: Number,
    required: true,
  },
  moonPhase: {
    type: String,
    required: true,
  },
  tidal: {
    type: String,
    required: true,
  },
  beachSlope: {
    type: String,
    required: true,
  },
  vegetation: {
    type: String,
    required: true,
  },
  seaLevel: {
    type: String,
    required: true,
  },
});

export default mongoose.model("ClimateFactor", ClimateFactorSchema);
