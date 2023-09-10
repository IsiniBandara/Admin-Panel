import mongoose from "mongoose";

const DailyNestingActivitySchema = new mongoose.Schema({
  date: {
    type: Date,
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
  emergenceSuccess: {
    type: Number,
    required: true,
  },
  relocation: {
    type: Number,
    required: true,
  },
});

export default mongoose.model(
  "DailyNestingActivity",
  DailyNestingActivitySchema
);
