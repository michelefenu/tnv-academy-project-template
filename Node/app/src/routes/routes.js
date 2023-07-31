import express from "express";

const API_ROOT = '/api';

import { getRating, createRating, updateRating, deleteRating, getRatings } from "../controllers/ratings-controller.js";

const router = express.Router();

router.get(`${API_ROOT}/ratings/:userId/:movieId`, getRating);
router.post(`${API_ROOT}/ratings`, createRating);
router.patch(`${API_ROOT}/ratings/:id`, updateRating);
router.delete(`${API_ROOT}/ratings/:movieId`, deleteRating);
router.get(`${API_ROOT}/ratings/:userId`, getRatings);

export default router;
