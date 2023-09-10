import express from "express";

import {
  createNewLocation,
  updateNewLocation,
  deleteNewLocation,
  getNewLocation,
  getNewLocations,
} from "../controllers/newLocation.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createNewLocation);
//UPDATE
router.put("/:id", verifyAdmin, updateNewLocation);
//DELETE
router.delete("/:id", verifyAdmin, deleteNewLocation);
//GET
router.get("/find/:id", getNewLocation);
//GET ALL
router.get("/", getNewLocations);

export default router;
