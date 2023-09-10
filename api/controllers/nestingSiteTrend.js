import NestingSiteTrend from "../models/NestingSiteTrend.js";

export const createNestingSiteTrend = async (req, res, next) => {
  const newNestingSiteTrend = new NestingSiteTrend(req.body);

  try {
    const savedNestingSiteTrend = await newNestingSiteTrend.save();
    res.status(200).json(savedNestingSiteTrend);
  } catch (error) {
    next(error);
  }
};

export const updateNestingSiteTrend = async (req, res, next) => {
  try {
    const updatedNestingSiteTrend = await NestingSiteTrend.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedNestingSiteTrend);
  } catch (error) {
    next(error);
  }
};

export const deleteNestingSiteTrend = async (req, res, next) => {
  try {
    await NestingSiteTrend.findByIdAndDelete(req.params.id);
    res.status(200).json("NestingSiteTrend has been deleted.");
  } catch (error) {
    next(error);
  }
};

export const getNestingSiteTrend = async (req, res, next) => {
  try {
    const nestingSiteTrend = await NestingSiteTrend.findById(req.params.id);
    res.status(200).json(nestingSiteTrend);
  } catch (error) {
    next(error);
  }
};

export const getNestingSiteTrends = async (req, res, next) => {
  try {
    const nestingSiteTrends = await NestingSiteTrend.find();
    res.status(200).json(nestingSiteTrends);
  } catch (error) {
    next(error);
  }
};
