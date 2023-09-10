import express from "express";

import {
  createNestingSite,
  updateNestingSite,
  deleteNestingSite,
  getNestingSite,
  getNestingSites,
} from "../controllers/nestingSites.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createNestingSite);
//UPDATE
router.put("/:id", verifyAdmin, updateNestingSite);
//DELETE
router.delete("/:id", verifyAdmin, deleteNestingSite);
//GET
router.get("/find/:id", getNestingSite);
//GET ALL
router.get("/", getNestingSites);

export default router;
