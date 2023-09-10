import express from "express";

import {
  createDailyNestingActivity,
  updateDailyNestingActivity,
  deleteDailyNestingActivity,
  getDailyNestingActivity,
  getDailyNestingActivitys,
} from "../controllers/dailyNestingActivity.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createDailyNestingActivity);
//UPDATE
router.put("/:id", verifyAdmin, updateDailyNestingActivity);
//DELETE
router.delete("/:id", verifyAdmin, deleteDailyNestingActivity);
//GET
router.get("/find/:id", getDailyNestingActivity);
//GET ALL
router.get("/", getDailyNestingActivitys);

export default router;
