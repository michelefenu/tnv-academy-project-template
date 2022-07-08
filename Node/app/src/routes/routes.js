import express, { application } from "express";

const API_ROOT = "/api";

import {
  getFavoritesByUserId,
  getAllRating,
  createRating,
  updateRating,
  deleteRating,
  getRatingById,
} from "../controllers/ratings-controller.js";

const router = express.Router();

router.get(`${API_ROOT}/rating`, getAllRating);
router.get(`${API_ROOT}/rating/:id`, getRatingById);
router.get(`${API_ROOT}/favorites/:userId/`, getFavoritesByUserId);
router.post(`${API_ROOT}/rating`, createRating);
router.patch(`${API_ROOT}/rating/:id`, updateRating);
router.delete(`${API_ROOT}/rating/:id`, deleteRating);

export default router;
