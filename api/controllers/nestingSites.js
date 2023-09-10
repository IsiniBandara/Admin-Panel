import NestingSite from "../models/NestingSite.js";

export const createNestingSite = async (req, res, next) => {
  const newNestingSite = new NestingSite(req.body);

  try {
    const savedNestingSite = await newNestingSite.save();
    res.status(200).json(savedNestingSite);
  } catch (error) {
    next(error);
  }
};

export const updateNestingSite = async (req, res, next) => {
  try {
    const updatedNestingSite = await NestingSite.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedNestingSite);
  } catch (error) {
    next(error);
  }
};

export const deleteNestingSite = async (req, res, next) => {
  try {
    await NestingSite.findByIdAndDelete(req.params.id);
    res.status(200).json("NestingSite has been deleted.");
  } catch (error) {
    next(error);
  }
};

export const getNestingSite = async (req, res, next) => {
  try {
    const nestingSite = await NestingSite.findById(req.params.id);
    res.status(200).json(nestingSite);
  } catch (error) {
    next(error);
  }
};

export const getNestingSites = async (req, res, next) => {
  try {
    const nestingSites = await NestingSite.find();
    res.status(200).json(nestingSites);
  } catch (error) {
    next(error);
  }
};
