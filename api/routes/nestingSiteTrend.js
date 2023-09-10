import express from "express";

import {
  createNestingSiteTrend,
  updateNestingSiteTrend,
  deleteNestingSiteTrend,
  getNestingSiteTrend,
  getNestingSiteTrends,
} from "../controllers/nestingSiteTrend.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createNestingSiteTrend);
//UPDATE
router.put("/:id", verifyAdmin, updateNestingSiteTrend);
//DELETE
router.delete("/:id", verifyAdmin, deleteNestingSiteTrend);
//GET
router.get("/find/:id", getNestingSiteTrend);
//GET ALL
router.get("/", getNestingSiteTrends);

export default router;
