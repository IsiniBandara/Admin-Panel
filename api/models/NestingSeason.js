import mongoose from "mongoose";

const NestingSeasonSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  nests: {
    type: Number,
    required: true,
  },
  hatchlings: {
    type: Number,
    required: true,
  },
  averageHatchSuccess: {
    type: Number,
    required: true,
  },
  averageEmergenceSuccess: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("NestingSeason", NestingSeasonSchema);
