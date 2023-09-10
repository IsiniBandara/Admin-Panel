import SpeciesNesting from "../models/SpeciesNesting.js";

export const createSpeciesNesting = async (req, res, next) => {
  const newSpeciesNesting = new SpeciesNesting(req.body);

  try {
    const savedSpeciesNesting = await newSpeciesNesting.save();
    res.status(200).json(savedSpeciesNesting);
  } catch (error) {
    next(error);
  }
};

export const updateSpeciesNesting = async (req, res, next) => {
  try {
    const updatedSpeciesNesting = await SpeciesNesting.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedSpeciesNesting);
  } catch (error) {
    next(error);
  }
};

export const deleteSpeciesNesting = async (req, res, next) => {
  try {
    await SpeciesNesting.findByIdAndDelete(req.params.id);
    res.status(200).json("SpeciesNesting has been deleted.");
  } catch (error) {
    next(error);
  }
};

export const getSpeciesNesting = async (req, res, next) => {
  try {
    const speciesNesting = await SpeciesNesting.findById(req.params.id);
    res.status(200).json(speciesNesting);
  } catch (error) {
    next(error);
  }
};

export const getSpeciesNestings = async (req, res, next) => {
  try {
    const speciesNestings = await SpeciesNesting.find();
    res.status(200).json(speciesNestings);
  } catch (error) {
    next(error);
  }
};
