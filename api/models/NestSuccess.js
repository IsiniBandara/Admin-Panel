import mongoose from "mongoose";

const NestSuccessSchema = new mongoose.Schema({
  species: {
    type: String,
    required: true,
  },
  totalNests: {
    type: Number,
    required: true,
  },
  successfulNests: {
    type: Number,
    required: true,
  },
  success: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("NestSuccess", NestSuccessSchema);
