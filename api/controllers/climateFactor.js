import ClimateFactor from "../models/ClimateFactor.js";

export const createClimateFactor = async (req, res, next) => {
  const newClimateFactor = new ClimateFactor(req.body);

  try {
    const savedClimateFactor = await newClimateFactor.save();
    res.status(200).json(savedClimateFactor);
  } catch (error) {
    next(error);
  }
};

export const updateClimateFactor = async (req, res, next) => {
  try {
    const updatedClimateFactor = await ClimateFactor.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedClimateFactor);
  } catch (error) {
    next(error);
  }
};

export const deleteClimateFactor = async (req, res, next) => {
  try {
    await ClimateFactor.findByIdAndDelete(req.params.id);
    res.status(200).json("ClimateFactor has been deleted.");
  } catch (error) {
    next(error);
  }
};

export const getClimateFactor = async (req, res, next) => {
  try {
    const climateFactor = await ClimateFactor.findById(req.params.id);
    res.status(200).json(climateFactor);
  } catch (error) {
    next(error);
  }
};

export const getClimateFactors = async (req, res, next) => {
  try {
    const climateFactors = await ClimateFactor.find();
    res.status(200).json(climateFactors);
  } catch (error) {
    next(error);
  }
};
