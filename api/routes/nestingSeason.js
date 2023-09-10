import express from "express";

import {
  createNestingSeason,
  updateNestingSeason,
  deleteNestingSeason,
  getNestingSeason,
  getNestingSeasons,
} from "../controllers/nestingSeason.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createNestingSeason);
//UPDATE
router.put("/:id", verifyAdmin, updateNestingSeason);
//DELETE
router.delete("/:id", verifyAdmin, deleteNestingSeason);
//GET
router.get("/find/:id", getNestingSeason);
//GET ALL
router.get("/", getNestingSeasons);

export default router;
