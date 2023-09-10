import NewLocation from "../models/NewLocation.js";

export const createNewLocation = async (req, res, next) => {
  const newNewLocation = new NewLocation(req.body);

  try {
    const savedNewLocation = await newNewLocation.save();
    res.status(200).json(savedNewLocation);
  } catch (error) {
    next(error);
  }
};

export const updateNewLocation = async (req, res, next) => {
  try {
    const updatedNewLocation = await NewLocation.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedNewLocation);
  } catch (error) {
    next(error);
  }
};

export const deleteNewLocation = async (req, res, next) => {
  try {
    await NewLocation.findByIdAndDelete(req.params.id);
    res.status(200).json("NewLocation has been deleted.");
  } catch (error) {
    next(error);
  }
};

export const getNewLocation = async (req, res, next) => {
  try {
    const newLocation = await NewLocation.findById(req.params.id);
    res.status(200).json(newLocation);
  } catch (error) {
    next(error);
  }
};

export const getNewLocations = async (req, res, next) => {
  try {
    const newLocations = await NewLocation.find();
    res.status(200).json(newLocations);
  } catch (error) {
    next(error);
  }
};
