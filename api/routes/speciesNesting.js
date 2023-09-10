import express from "express";

import {
  createSpeciesNesting,
  updateSpeciesNesting,
  deleteSpeciesNesting,
  getSpeciesNesting,
  getSpeciesNestings,
} from "../controllers/speciesNesting.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createSpeciesNesting);
//UPDATE
router.put("/:id", verifyAdmin, updateSpeciesNesting);
//DELETE
router.delete("/:id", verifyAdmin, deleteSpeciesNesting);
//GET
router.get("/find/:id", getSpeciesNesting);
//GET ALL
router.get("/", getSpeciesNestings);

export default router;
