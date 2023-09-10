import NestSuccess from "../models/NestSuccess.js";
import https from "https";
import axios from "axios";

export const createNestSuccess = async (req, res, next) => {
  const newNestSuccess = new NestSuccess(req.body);

  try {
    const savedNestSuccess = await newNestSuccess.save();
    res.status(200).json(savedNestSuccess);
  } catch (error) {
    next(error);
  }
};

export const updateNestSuccess = async (req, res, next) => {
  try {
    const updatedNestSuccess = await NestSuccess.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedNestSuccess);
  } catch (error) {
    next(error);
  }
};

export const deleteNestSuccess = async (req, res, next) => {
  try {
    await NestSuccess.findByIdAndDelete(req.params.id);
    res.status(200).json("NestSuccess has been deleted.");
  } catch (error) {
    next(error);
  }
};

export const getNestSuccess = async (req, res, next) => {
  try {
    const nestSuccess = await NestSuccess.findById(req.params.id);
    res.status(200).json(nestSuccess);
  } catch (error) {
    next(error);
  }
};

export const getNestSuccesss = async (req, res, next) => {
  try {
    const nestSuccesss = await NestSuccess.find();
    res.status(200).json(nestSuccesss);
  } catch (error) {
    next(error);
  }
};

export const predictNesting = async (req, res, next) => {
  try {
    const apiUrl = "https://turtle-prediction-api.onrender.com/predict";
    const predictData = {
      Sea_turtle_type: req.body.Sea_turtle_type,
      Area: req.body.Area,
      Beach_Slope: req.body.Beach_Slope,
      Surface_Current: parseFloat(req.body.Surface_Current),
      Temperature: parseFloat(req.body.Temperature),
      Tidal_Range: parseFloat(req.body.Tidal_Range),
      Vegetation: req.body.Vegetation
    }

    try {
      const response = await axios.post(apiUrl, predictData);
      // Send the response from the external API back to the client
      res.status(200).json(response.data);
    } catch (error) {
      console.error("Error making prediction:", error);
      res
        .status(500)
        .json({ error: "An error occurred while making a prediction." });
    }
  } catch (error) {
    next(error);
  }
};
