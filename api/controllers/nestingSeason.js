import NestingSeason from "../models/NestingSeason.js";

export const createNestingSeason = async (req, res, next) => {
  const newNestingSeason = new NestingSeason(req.body);

  try {
    const savedNestingSeason = await newNestingSeason.save();
    res.status(200).json(savedNestingSeason);
  } catch (error) {
    next(error);
  }
};

export const updateNestingSeason = async (req, res, next) => {
  try {
    const updatedNestingSeason = await NestingSeason.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedNestingSeason);
  } catch (error) {
    next(error);
  }
};

export const deleteNestingSeason = async (req, res, next) => {
  try {
    await NestingSeason.findByIdAndDelete(req.params.id);
    res.status(200).json("NestingSeason has been deleted.");
  } catch (error) {
    next(error);
  }
};

export const getNestingSeason = async (req, res, next) => {
  try {
    const nestingSeason = await NestingSeason.findById(req.params.id);
    res.status(200).json(nestingSeason);
  } catch (error) {
    next(error);
  }
};

export const getNestingSeasons = async (req, res, next) => {
  try {
    const nestingSeasons = await NestingSeason.find();
    res.status(200).json(nestingSeasons);
  } catch (error) {
    next(error);
  }
};
