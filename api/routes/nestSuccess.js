import express from "express";

import {
  createNestSuccess,
  updateNestSuccess,
  deleteNestSuccess,
  getNestSuccess,
  getNestSuccesss,
  predictNesting,
} from "../controllers/nestSuccess.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createNestSuccess);
//UPDATE
router.put("/:id", verifyAdmin, updateNestSuccess);
//DELETE
router.delete("/:id", verifyAdmin, deleteNestSuccess);
//GET
router.get("/find/:id", getNestSuccess);
//GET ALL
router.get("/", getNestSuccesss);

router.post('/make-prediction', predictNesting);

export default router;
