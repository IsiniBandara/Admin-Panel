import express from "express";

import {
  createClimateFactor,
  updateClimateFactor,
  deleteClimateFactor,
  getClimateFactor,
  getClimateFactors,
} from "../controllers/climateFactor.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createClimateFactor);
//UPDATE
router.put("/:id", verifyAdmin, updateClimateFactor);
//DELETE
router.delete("/:id", verifyAdmin, deleteClimateFactor);
//GET
router.get("/find/:id", getClimateFactor);
//GET ALL
router.get("/", getClimateFactors);

export default router;
