import mongoose from "mongoose";

const SpeciesNestingSchema = new mongoose.Schema({
  species: {
    type: String,
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
  averageClutchSize: {
    type: Number,
    required: true,
  },
  incubationDays: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("SpeciesNesting", SpeciesNestingSchema);
