import mongoose from "mongoose";

const NestingSiteTrendSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  nestCount: {
    type: Number,
    required: true,
  },
  hatchlingCount: {
    type: Number,
    required: true,
  },
  success: {
    type: Number,
    required: true,
  },
  siteActivityTrend: {
    type: String,
    required: true,
  },
});

export default mongoose.model("NestingSiteTrend", NestingSiteTrendSchema);
