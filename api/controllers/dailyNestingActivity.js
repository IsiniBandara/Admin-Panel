import DailyNestingActivity from "../models/DailyNestingActivity.js";

export const createDailyNestingActivity = async (req, res, next) => {
  const newDailyNestingActivity = new DailyNestingActivity(req.body);

  try {
    const savedDailyNestingActivity = await newDailyNestingActivity.save();
    res.status(200).json(savedDailyNestingActivity);
  } catch (error) {
    next(error);
  }
};

export const updateDailyNestingActivity = async (req, res, next) => {
  try {
    const updatedDailyNestingActivity =
      await DailyNestingActivity.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
    res.status(200).json(updatedDailyNestingActivity);
  } catch (error) {
    next(error);
  }
};

export const deleteDailyNestingActivity = async (req, res, next) => {
  try {
    await DailyNestingActivity.findByIdAndDelete(req.params.id);
    res.status(200).json("DailyNestingActivity has been deleted.");
  } catch (error) {
    next(error);
  }
};

export const getDailyNestingActivity = async (req, res, next) => {
  try {
    const dailyNestingActivity = await DailyNestingActivity.findById(
      req.params.id
    );
    res.status(200).json(dailyNestingActivity);
  } catch (error) {
    next(error);
  }
};

export const getDailyNestingActivitys = async (req, res, next) => {
  try {
    const dailyNestingActivitys = await DailyNestingActivity.find();
    res.status(200).json(dailyNestingActivitys);
  } catch (error) {
    next(error);
  }
};
